package de.fon4food.backend.security;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("token")
public class ConfirmationTokenController {

	public class ValidityResponse {
		private boolean tokenIsValid;

		public boolean isTokenIsValid() {
			return tokenIsValid;
		}

		public void setTokenIsValid(boolean tokenIsValid) {
			this.tokenIsValid = tokenIsValid;
		}
	}
	
	private ConfirmationTokenValidityChecker confirmationTokenValidityChecker;
	
	public ConfirmationTokenController(ConfirmationTokenValidityChecker confirmationTokenValidityChecker) {
		this.confirmationTokenValidityChecker = confirmationTokenValidityChecker;
	}
	
	@GetMapping
	@RequestMapping("check-validity/{token}")
	public ValidityResponse checkValidity(@PathVariable String token) {
		ValidityResponse validityResponse = new ValidityResponse();
		validityResponse.setTokenIsValid(confirmationTokenValidityChecker.isTokenValid(token));
		return validityResponse;
	}
	
}
