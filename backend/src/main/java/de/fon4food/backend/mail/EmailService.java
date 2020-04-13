package de.fon4food.backend.mail;

import java.util.Map;

import org.springframework.core.io.InputStreamSource;
import org.thymeleaf.context.Context;

import de.fon4food.backend.model.auth.User;

public interface EmailService {
    
    public void sendMail(User recipient, String senderEmail, String subject, String templateFile, Context context,
			Map<String, String> embeddedImages, Map<String, InputStreamSource> attachments);

}