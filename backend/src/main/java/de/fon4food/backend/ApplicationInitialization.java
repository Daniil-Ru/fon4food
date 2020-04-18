package de.fon4food.backend;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.context.event.ContextRefreshedEvent;
import org.springframework.context.event.EventListener;
import org.springframework.core.env.Environment;
import org.springframework.stereotype.Component;

import de.fon4food.backend.model.auth.Role;
import de.fon4food.backend.model.auth.User;
import de.fon4food.backend.model.auth.UserRepository;

@Component
public class ApplicationInitialization {

	private static final Logger logger = LoggerFactory.getLogger(ApplicationInitialization.class);

	private static final String DEFAULT_PASSWORD = "pass";
	private static final String DEFAULT_PASSWORD_HASH = "$2a$10$8.UnVuG9HHgffUDAlk8qfOuVGkqRzgVymGe07xd00DMxs.AQubh4a";

	private UserRepository userRepository;

	private CustomConfiguration customConfiguration;

	private Environment environment;
	
	public ApplicationInitialization(Environment environment, CustomConfiguration customConfiguration, UserRepository userRepository) {
		this.environment = environment;
		this.customConfiguration = customConfiguration;
		this.userRepository = userRepository;
	}

	private void createTestUser(String email, String passwordHash, Role role) {
		User user = userRepository.findByEmail(email);
		if (user == null) {
			user = new User();
			user.setEmail(email);
			user.setPassword(passwordHash);
			user.getRoles().add(role);
			userRepository.save(user);
		}
	}
	
	@EventListener
	public void onApplicationEvent(ContextRefreshedEvent event) {
		String dsPassword = environment.getProperty("spring.datasource.password");
		if (DEFAULT_PASSWORD.equals(dsPassword)) {
			logger.warn("⚠⚠⚠ Running in DEV mode ⚠⚠⚠");
			for (String testVendor : customConfiguration.getCreateTestVendors()) {
				createTestUser(testVendor, DEFAULT_PASSWORD_HASH, Role.ROLE_VENDOR);
			}
			for (String testSupplier : customConfiguration.getCreateTestSuppliers()) {
				createTestUser(testSupplier, DEFAULT_PASSWORD_HASH, Role.ROLE_SUPPLIER);
			}
		} else {
			logger.info("Running in PROD mode");
		}
	}
	
}