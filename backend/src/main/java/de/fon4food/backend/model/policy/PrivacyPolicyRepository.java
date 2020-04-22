package de.fon4food.backend.model.policy;

import org.springframework.data.jpa.repository.JpaRepository;

public interface PrivacyPolicyRepository extends JpaRepository<PrivacyPolicy, Long> {

	PrivacyPolicy findTopByOrderByIdDesc();
	
	PrivacyPolicy findByContent(String content);

}