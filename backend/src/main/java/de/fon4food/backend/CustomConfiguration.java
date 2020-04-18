package de.fon4food.backend;

import java.util.ArrayList;
import java.util.List;

import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.context.annotation.Configuration;

@Configuration
@ConfigurationProperties("fon4food")
public class CustomConfiguration {

	private List<String> corsOrigins = new ArrayList<>();
	private String rememberMeKey = "uniqueAndSecret";
	private String emailFrom = "info@localhost";
	private String emailFromNoReply = "noreply@localhost";
	private List<String> createTestVendors;
	private List<String> createTestSuppliers;

	public CustomConfiguration() {
		this.corsOrigins.add("*");
	}

	public List<String> getCorsOrigins() {
		return corsOrigins;
	}

	public void setCorsOrigins(List<String> corsOrigins) {
		this.corsOrigins = corsOrigins;
	}

	public String getRememberMeKey() {
		return rememberMeKey;
	}

	public void setRememberMeKey(String rememberMeKey) {
		this.rememberMeKey = rememberMeKey;
	}

	public String getEmailFrom() {
		return emailFrom;
	}

	public void setEmailFrom(String emailFrom) {
		this.emailFrom = emailFrom;
	}

	public String getEmailFromNoReply() {
		return emailFromNoReply;
	}

	public void setEmailFromNoReply(String emailFromNoReply) {
		this.emailFromNoReply = emailFromNoReply;
	}

	public List<String> getCreateTestVendors() {
		return createTestVendors;
	}

	public void setCreateTestVendors(List<String> createTestVendors) {
		this.createTestVendors = createTestVendors;
	}

	public List<String> getCreateTestSuppliers() {
		return createTestSuppliers;
	}

	public void setCreateTestSuppliers(List<String> createTestSuppliers) {
		this.createTestSuppliers = createTestSuppliers;
	}

}
