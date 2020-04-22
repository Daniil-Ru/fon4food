package de.fon4food.backend.security;

import java.time.OffsetDateTime;

import org.springframework.stereotype.Component;

import de.fon4food.backend.model.auth.ConfirmationToken;
import de.fon4food.backend.model.auth.ConfirmationTokenRepository;

@Component
public class ConfirmationTokenValidityChecker {

	private ConfirmationTokenRepository confirmationTokenRepository;

	public ConfirmationTokenValidityChecker(ConfirmationTokenRepository confirmationTokenRepository) {
		this.confirmationTokenRepository = confirmationTokenRepository;
	}
	
	public boolean isTokenValid(String token) {
		ConfirmationToken confirmationToken = confirmationTokenRepository.findByToken(token);
		return confirmationToken != null && confirmationToken.getExpireDate().compareTo(OffsetDateTime.now()) > 0;
	}

	
}
