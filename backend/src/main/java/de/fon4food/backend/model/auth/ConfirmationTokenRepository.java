package de.fon4food.backend.model.auth;

import org.springframework.data.jpa.repository.JpaRepository;

public interface ConfirmationTokenRepository extends JpaRepository<ConfirmationToken, Long> {

	public ConfirmationToken findByToken(String token);
	
}
