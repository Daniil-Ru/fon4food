package de.fon4food.backend.security;

import javax.servlet.http.HttpServletResponse;
import javax.sql.DataSource;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

import de.fon4food.backend.CustomConfiguration;

@Configuration
public class SecurityConfiguration extends WebSecurityConfigurerAdapter {

	Logger logger = LoggerFactory.getLogger(SecurityConfiguration.class);
	
	@Autowired
    private CustomConfiguration customConfiguration;
	
	@Autowired
    private DataSource dataSource;
	
	@Override
	protected void configure(HttpSecurity http) throws Exception {
		http.httpBasic()
				.and()
			.authorizeRequests()
				.antMatchers("/vendors", "/login").permitAll()
				.anyRequest().authenticated()
				.and()
			.logout()
				.logoutSuccessHandler((request, response, authentication) -> {
					response.setStatus(HttpServletResponse.SC_OK);
				})
				.deleteCookies("JSESSIONID")
				.and()
			.rememberMe()
				.key("uniqueAndSecret")
				.and()
			.csrf()
				.disable();
//		        .csrfTokenRepository(CookieCsrfTokenRepository.withHttpOnlyFalse());
		
		if (customConfiguration.getEnableCors()) {
			http.cors();
			logger.warn("CORS is enabled");
		} else {
			http.cors().disable();
		}
	}
	
    @Bean
    public WebMvcConfigurer corsConfigurer() {
        return new WebMvcConfigurer() {
            @Override
            public void addCorsMappings(CorsRegistry registry) {
            	registry.addMapping("/**")
            	.allowedOrigins("http://localhost:4200")
            	.allowCredentials(true);
            }
        };
    }
    
    @Autowired
    public void configureGlobal(AuthenticationManagerBuilder auth) throws Exception {
        auth.jdbcAuthentication()
            .dataSource(dataSource);
    }

    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }
    
}
