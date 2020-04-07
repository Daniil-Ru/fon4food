package de.fon4food.backend.security;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.core.Authentication;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.authentication.logout.LogoutSuccessHandler;
import org.springframework.security.web.csrf.CookieCsrfTokenRepository;
import org.springframework.security.web.csrf.CsrfToken;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

import de.fon4food.backend.CustomConfiguration;

@Configuration
public class SecurityConfiguration extends WebSecurityConfigurerAdapter {

	Logger logger = LoggerFactory.getLogger(SecurityConfiguration.class);
	
	@Autowired
    private CustomConfiguration customConfiguration;
	
	@Override
	protected void configure(HttpSecurity http) throws Exception {
		CookieCsrfTokenRepository csrfTokenRepository = this.getCookieCsrfTokenRepository();
		http.httpBasic()
				.and()
			.authorizeRequests()
				.antMatchers("/vendors", "/login").permitAll()
				.anyRequest().authenticated()
				.and()
			.logout()
				.deleteCookies("JSESSIONID")
				.logoutSuccessHandler(new NewCsrfCookieLogoutHandler(csrfTokenRepository))
				.and()
			.rememberMe()
				.key(customConfiguration.getRememberMeKey())
				.and()
			.cors()
				.and()
			.csrf()
		        .csrfTokenRepository(csrfTokenRepository);
	}
	
	class NewCsrfCookieLogoutHandler implements LogoutSuccessHandler {

		private CookieCsrfTokenRepository tokenRepository;
		
		public NewCsrfCookieLogoutHandler(CookieCsrfTokenRepository tokenRepository) {
			this.tokenRepository = tokenRepository;
		}

		@Override
		public void onLogoutSuccess(HttpServletRequest request, HttpServletResponse response,
				Authentication authentication) throws IOException, ServletException {
			CsrfToken csrfToken = this.tokenRepository.generateToken(request);
			this.tokenRepository.saveToken(csrfToken, request, response);
			request.setAttribute(CsrfToken.class.getName(), csrfToken);
			request.setAttribute(csrfToken.getParameterName(), csrfToken);
		}
		
	}
	
    private CookieCsrfTokenRepository getCookieCsrfTokenRepository() {
    	CookieCsrfTokenRepository repo = CookieCsrfTokenRepository.withHttpOnlyFalse();
    	repo.setCookiePath("/");
    	repo.setCookieName("fon4food-Xsrf-Cookie");
    	repo.setHeaderName("fon4food-Xsrf-Header");
		return repo;
	}

    @Bean
    public WebMvcConfigurer corsConfigurer() {
        return new WebMvcConfigurer() {
            @Override
            public void addCorsMappings(CorsRegistry registry) {
            	var corsOrigins = customConfiguration.getCorsFrontends();
            	registry.addMapping("/**")
            		.allowedOrigins(corsOrigins.toArray(new String[0]))
            		.allowCredentials(true);
            }
        };
    }

    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }
    
}
