INSERT INTO users (username, email, password, enabled)
  values 
    ('anton', 'anton@example.com', '$2a$10$8.UnVuG9HHgffUDAlk8qfOuVGkqRzgVymGe07xd00DMxs.AQubh4a', 1),
    ('lisa', 'lisa@example.com', '$2a$10$8.UnVuG9HHgffUDAlk8qfOuVGkqRzgVymGe07xd00DMxs.AQubh4a', 1);
 
INSERT INTO authorities (username, authority)
  values
    ('anton', 'VENDOR'),
    ('lisa', 'SUPPLIER');

