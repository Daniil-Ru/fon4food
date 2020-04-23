package de.fon4food.backend.security;

import java.time.OffsetDateTime;
import java.util.Base64;
import java.util.HashMap;
import java.util.Map;
import java.util.UUID;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;
import org.thymeleaf.context.Context;

import de.fon4food.backend.CustomConfiguration;
import de.fon4food.backend.mail.EmailService;
import de.fon4food.backend.model.auth.ConfirmationToken;
import de.fon4food.backend.model.auth.ConfirmationTokenRepository;
import de.fon4food.backend.model.auth.ConfirmationTokenRole;
import de.fon4food.backend.model.auth.User;
import de.fon4food.backend.model.auth.UserRepository;
import de.fon4food.backend.model.policy.PrivacyPolicy;
import de.fon4food.backend.model.policy.PrivacyPolicyConsent;
import de.fon4food.backend.model.policy.PrivacyPolicyConsentRepository;
import de.fon4food.backend.model.policy.PrivacyPolicyRepository;

@RestController
@RequestMapping("signup")
public class RegistrationController {

	private CustomConfiguration config;

	private UserRepository userRepository;
	
	private PrivacyPolicyRepository privacyPolicyRepository;

	private PrivacyPolicyConsentRepository privacyPolicyConsentRepository;

	private ConfirmationTokenRepository confirmationTokenRepository;

	private EmailService emailService;

	private ConfirmationTokenValidityChecker confirmationTokenValidityChecker;

	private SecurityConfiguration securityConfiguration;
	
	public RegistrationController(
			CustomConfiguration config,
			UserRepository userRepository,
			PrivacyPolicyRepository privacyPolicyRepository,
			PrivacyPolicyConsentRepository privacyPolicyConsentRepository,
			ConfirmationTokenRepository confirmationTokenRepository,
			EmailService emailService,
			ConfirmationTokenValidityChecker confirmationTokenValidityChecker,
			SecurityConfiguration securityConfiguration) {
		this.config = config;
		this.userRepository = userRepository;
		this.privacyPolicyRepository = privacyPolicyRepository;
		this.privacyPolicyConsentRepository = privacyPolicyConsentRepository;
		this.confirmationTokenRepository = confirmationTokenRepository;
		this.emailService = emailService;
		this.confirmationTokenValidityChecker = confirmationTokenValidityChecker;
		this.securityConfiguration = securityConfiguration;
	}

	@PostMapping
	public void register(@RequestBody RegistrationInfo regInfo) {
		PrivacyPolicy latestPrivacyPolicy = checkLatestPrivacyPolicy(regInfo);
		User user = saveUser(regInfo);
		savePrivacyPolicyConsent(latestPrivacyPolicy, user);
		String token = createActivationToken(user);
		sendConfirmationEmail(user, token);
	}

	private String createActivationToken(User user) {
		String tokenStr = UUID.randomUUID().toString();
		ConfirmationToken token = new ConfirmationToken();
		token.setToken(tokenStr);
		token.setUser(user);
		token.setExpireDate(OffsetDateTime.now().plusDays(config.getTokenExpireDays()));
		token.setRole(ConfirmationTokenRole.ACTIVATE);
		confirmationTokenRepository.save(token);
		return tokenStr;
	}

	private PrivacyPolicy checkLatestPrivacyPolicy(RegistrationInfo regInfo) {
		String privacyPolicyConsented = new String(Base64.getDecoder().decode(regInfo.getPrivacyPolicyBase64()));
		PrivacyPolicy latestPrivacyPolicy = privacyPolicyRepository.findTopByOrderByIdDesc();
		if (!privacyPolicyConsented.equals(latestPrivacyPolicy.getContent())) {
			throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "The privacy policy consented by the client is not current.");
		}
		return latestPrivacyPolicy;
	}

	private void sendConfirmationEmail(User user, String token) {
		Context context = new Context();
		context.setVariable("firstName", user.getFirstName());
		context.setVariable("lastName", user.getLastName());
		context.setVariable("confirmationLink", config.getFrontendUrl() + "/set-pw/" + token);
		Map<String, String> embeddedImages = new HashMap<>();
		embeddedImages.put("logo", "logo.svg");
		emailService.sendMail(
				user,
				config.getEmailFromNoReply(),
				"Confirm your registration at fon4food",  // FIXME: translate
				"registration-please-confirm",
				context,
				embeddedImages, null);
	}

	private void savePrivacyPolicyConsent(PrivacyPolicy latestPrivacyPolicy, User user) {
		PrivacyPolicyConsent consent = new PrivacyPolicyConsent();
		consent.setConsentDate(OffsetDateTime.now());
		consent.setUser(user);
		consent.setPrivacyPolicy(latestPrivacyPolicy);
		privacyPolicyConsentRepository.save(consent);
	}

	private User saveUser(RegistrationInfo regInfo) {
		User user = new User();
		user.setEmail(regInfo.getEmail());
		user.setFirstName(regInfo.getFirstName());
		user.setLastName(regInfo.getLastName());
		user.setCompany(regInfo.getCompany());
		user.setAddress(regInfo.getAddress());
		user.setZipCode(regInfo.getZipCode());
		user.setCity(regInfo.getCity());
		user.setPhone(regInfo.getPhone());
		userRepository.save(user);
		return user;
	}
	
	@PostMapping
	@RequestMapping("activate")
	public void activate(@RequestBody ActivationInfo activationInfo) {
		String token = activationInfo.getToken();
		if (!confirmationTokenValidityChecker.isTokenValid(token)) {
			throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "The provided token is not valid.");
		}
		String password = new String(Base64.getDecoder().decode(activationInfo.getPassword()));
		// FIXME: check password rules
		ConfirmationToken confirmationToken = confirmationTokenRepository.findByToken(token);
		User user = confirmationToken.getUser();
		String hashedPassword = securityConfiguration.passwordEncoder().encode(password);
		user.setPassword(hashedPassword);
		user.setActivated(true);
		userRepository.save(user);
		confirmationTokenRepository.delete(confirmationToken);
	}
	
}
