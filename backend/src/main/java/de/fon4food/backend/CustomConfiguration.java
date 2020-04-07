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

	public CustomConfiguration() {
		this.corsOrigins.add("*");
	}
	
	public List<String> getCorsFrontends() {
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
	
}
