package de.fon4food.backend;

import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.context.annotation.Configuration;

@Configuration
@ConfigurationProperties("fon4food")
public class CustomConfiguration {

	private boolean enableCors = false;

	public boolean getEnableCors() {
		return enableCors;
	}

	public void setEnableCors(boolean enableCors) {
		this.enableCors = enableCors;
	}
	
}
