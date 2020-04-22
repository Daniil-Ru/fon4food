package de.fon4food.backend.security;

import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("user")
public class UserController {
	
	@GetMapping
	public UserInfo user(Authentication authentication) {
		UserDetails userDetails = (UserDetails) authentication.getPrincipal();
		UserInfo userInfo = new UserInfo();
		userInfo.setUsername(userDetails.getUsername());
		for (GrantedAuthority authority : userDetails.getAuthorities()) {
			userInfo.getRoles().add(authority.getAuthority());
		}
		return userInfo;
	}

}
