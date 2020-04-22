package de.fon4food.backend.model.auth;

import java.time.OffsetDateTime;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;

@Entity
public class ConfirmationToken {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	@Column(unique = true)
	private String token;
	
	@ManyToOne
	private User user;
	
	private OffsetDateTime expireDate;

	@Enumerated(EnumType.STRING)
	private ConfirmationTokenRole role;
	
	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getToken() {
		return token;
	}

	public void setToken(String token) {
		this.token = token;
	}

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}

	public OffsetDateTime getExpireDate() {
		return expireDate;
	}

	public void setExpireDate(OffsetDateTime expireDate) {
		this.expireDate = expireDate;
	}

	public ConfirmationTokenRole getRole() {
		return role;
	}

	public void setRole(ConfirmationTokenRole role) {
		this.role = role;
	}

}
