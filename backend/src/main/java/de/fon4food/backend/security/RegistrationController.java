package de.fon4food.backend.security;

import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.thymeleaf.context.Context;

import de.fon4food.backend.CustomConfiguration;
import de.fon4food.backend.mail.EmailService;
import de.fon4food.backend.model.auth.User;
import de.fon4food.backend.model.auth.UserRepository;

@RestController
@RequestMapping("signup")
public class RegistrationController {

	@Autowired
	CustomConfiguration config;

	@Autowired
	UserRepository userRepository;

	@Autowired
	EmailService emailService;

	@PostMapping
	public void register(@RequestBody RegistrationInfo regInfo) {
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
		
		Context context = new Context();
		context.setVariable("name", user.getEmail());
		Map<String, String> embeddedImages = new HashMap<>();
		embeddedImages.put("logo", "logo.svg");
		emailService.sendMail(user, config.getEmailFromNoReply(), "Please confirm your registration at fon4food", "registration-please-confirm", context,
				embeddedImages, null);
	}

	@GetMapping
	@RequestMapping("activate")
	public void activate() {
		
	}
	
}
