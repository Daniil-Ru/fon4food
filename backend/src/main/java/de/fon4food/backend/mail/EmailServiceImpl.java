package de.fon4food.backend.mail;

import java.util.Locale;
import java.util.Map;

import javax.mail.MessagingException;
import javax.mail.internet.MimeMessage;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.ClassPathResource;
import org.springframework.core.io.InputStreamSource;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Component;
import org.thymeleaf.context.Context;
import org.thymeleaf.spring5.SpringTemplateEngine;

import de.fon4food.backend.model.auth.User;

@Component
public class EmailServiceImpl implements EmailService {

	@Autowired
	private JavaMailSender emailSender;

	@Autowired
	private SpringTemplateEngine templateEngine;

	public void sendMail(User recipient, String senderEmail, String subject, String template, Context context,
			Map<String, String> embeddedImages, Map<String, InputStreamSource> attachments) {
		try {
			context.setLocale(Locale.GERMAN);
			final MimeMessage message = emailSender.createMimeMessage();
			MimeMessageHelper helper;
			helper = new MimeMessageHelper(message, true, "UTF-8");
			helper.setSubject(subject);
			helper.setFrom(senderEmail);
			helper.setTo(recipient.getEmail());
			if (embeddedImages != null) {
				for (Map.Entry<String, String> embeddedImageEntry : embeddedImages.entrySet()) {
					String imageId = embeddedImageEntry.getKey();
					String fileName = embeddedImageEntry.getValue();
					context.setVariable(imageId, fileName);
				}
			}
			if (attachments != null) {
				for (Map.Entry<String, InputStreamSource> attachmentEntry : attachments.entrySet()) {
					helper.addAttachment(attachmentEntry.getKey(), attachmentEntry.getValue());
				}
			}
			context.setVariable("textContent", templateEngine.process("text/" + template, context));
			context.setVariable("htmlContent", templateEngine.process("html/" + template, context));
			final String textContent = templateEngine.process("text/common", context);
			final String htmlContent = templateEngine.process("html/common", context);
			helper.setText(textContent, htmlContent);
			if (embeddedImages != null) {
				for (String imageFileName : embeddedImages.values()) {
					helper.addInline(imageFileName, new ClassPathResource("/mail/images/" + imageFileName));
				}
			}
			emailSender.send(message);
		} catch (MessagingException e) {
			e.printStackTrace();
		}
	}

}