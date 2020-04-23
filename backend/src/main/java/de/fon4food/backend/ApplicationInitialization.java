package de.fon4food.backend;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.time.OffsetDateTime;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.context.event.ContextRefreshedEvent;
import org.springframework.context.event.EventListener;
import org.springframework.core.env.Environment;
import org.springframework.stereotype.Component;

import de.fon4food.backend.model.auth.Role;
import de.fon4food.backend.model.auth.User;
import de.fon4food.backend.model.auth.UserRepository;
import de.fon4food.backend.model.policy.PrivacyPolicy;
import de.fon4food.backend.model.policy.PrivacyPolicyRepository;

@Component
public class ApplicationInitialization {

	private static final Logger logger = LoggerFactory.getLogger(ApplicationInitialization.class);

	private static final String DEFAULT_PASSWORD = "pass";
	private static final String DEFAULT_PASSWORD_HASH = "$2a$10$8.UnVuG9HHgffUDAlk8qfOuVGkqRzgVymGe07xd00DMxs.AQubh4a";

	private UserRepository userRepository;

	private CustomConfiguration customConfiguration;

	private Environment environment;

	private PrivacyPolicyRepository privacyPolicyRepository;
	
	public ApplicationInitialization(Environment environment,
			CustomConfiguration customConfiguration,
			UserRepository userRepository,
			PrivacyPolicyRepository privacyPolicyRepository
			) {
		this.environment = environment;
		this.customConfiguration = customConfiguration;
		this.userRepository = userRepository;
		this.privacyPolicyRepository = privacyPolicyRepository;
	}

	private void createTestUser(String firstName, String passwordHash, Role role) {
		String email = firstName + "@mail.fon4food";
		User user = userRepository.findByEmail(email);
		if (user == null) {
			user = new User();
			user.setFirstName(firstName);
			user.setLastName("Test-User");
			user.setEmail(email);
			user.setPassword(passwordHash);
			user.getRoles().add(role);
			user.setActivated(true);
			userRepository.save(user);
		}
	}
	
	private void createTestUsers() {
		for (String testVendor : customConfiguration.getCreateTestVendors()) {
			createTestUser(testVendor, DEFAULT_PASSWORD_HASH, Role.ROLE_VENDOR);
		}
		for (String testSupplier : customConfiguration.getCreateTestSuppliers()) {
			createTestUser(testSupplier, DEFAULT_PASSWORD_HASH, Role.ROLE_SUPPLIER);
		}
	}
	
	private void savePrivacyPolicyToDatabase() {
		String privacyPolicyFile = customConfiguration.getPrivacyPolicy();
		Path path = Paths.get(privacyPolicyFile);
		try {
			String policyContent = Files.readString(path);
			PrivacyPolicy privacyPolicy = privacyPolicyRepository.findTopByOrderByIdDesc();
			if (privacyPolicy == null || !policyContent.equals(privacyPolicy.getContent())) {
				privacyPolicy = new PrivacyPolicy();
				privacyPolicy.setContent(policyContent);
				privacyPolicy.setImportDate(OffsetDateTime.now());
				privacyPolicyRepository.save(privacyPolicy);
			}
		} catch (IOException e) {
			logger.error("Privacy policy file could not be read: " + privacyPolicyFile, e);
		}
	}
	
	@EventListener
	public void onApplicationEvent(ContextRefreshedEvent event) {
		String dsPassword = environment.getProperty("spring.datasource.password");
		if (DEFAULT_PASSWORD.equals(dsPassword)) {
			logger.warn("⚠⚠⚠ Running in DEV mode ⚠⚠⚠");
			createTestUsers();
		} else {
			logger.info("Running in PROD mode");
		}
		savePrivacyPolicyToDatabase();
	}
	
}