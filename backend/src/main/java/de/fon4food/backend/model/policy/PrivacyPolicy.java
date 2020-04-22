package de.fon4food.backend.model.policy;

import java.time.OffsetDateTime;
import java.util.Set;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Lob;
import javax.persistence.OneToMany;

@Entity
public class PrivacyPolicy {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	@Lob
	private String content;

	private OffsetDateTime importDate;
	
	@OneToMany(mappedBy = "privacyPolicy")
	private Set<PrivacyPolicyConsent> consents;

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getContent() {
		return content;
	}

	public void setContent(String content) {
		this.content = content;
	}

	public OffsetDateTime getImportDate() {
		return importDate;
	}

	public void setImportDate(OffsetDateTime importDate) {
		this.importDate = importDate;
	}

	public Set<PrivacyPolicyConsent> getConsents() {
		return consents;
	}

	public void setConsents(Set<PrivacyPolicyConsent> consents) {
		this.consents = consents;
	}

}
