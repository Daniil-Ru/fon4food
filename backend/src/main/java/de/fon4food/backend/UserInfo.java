package de.fon4food.backend;

import java.util.ArrayList;
import java.util.List;

public class UserInfo {
	
	private String username;
	private List<String> roles = new ArrayList<>();
	
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public List<String> getRoles() {
		return roles;
	}
	public void setRoles(List<String> roles) {
		this.roles = roles;
	}
	
}
