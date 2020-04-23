package de.fon4food.backend.model.policy;

import java.time.OffsetDateTime;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;

import de.fon4food.backend.model.auth.User;

@Entity
public class PrivacyPolicyConsent {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	@ManyToOne
	private User user;
	
	@ManyToOne
	private PrivacyPolicy privacyPolicy;
	
	private OffsetDateTime consentDate;

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}

	public PrivacyPolicy getPrivacyPolicy() {
		return privacyPolicy;
	}

	public void setPrivacyPolicy(PrivacyPolicy privacyPolicy) {
		this.privacyPolicy = privacyPolicy;
	}

	public OffsetDateTime getConsentDate() {
		return consentDate;
	}

	public void setConsentDate(OffsetDateTime consentDate) {
		this.consentDate = consentDate;
	}

}
