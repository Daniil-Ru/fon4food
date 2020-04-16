FROM tvial/docker-mailserver:latest

COPY postfix-accounts.cf /tmp/docker-mailserver/postfix-accounts.cf

RUN addmailuser info@mail.fon4food pass
RUN addmailuser lisa@mail.fon4food pass
RUN addmailuser anton@mail.fon4food pass

RUN addmailuser user1@mail.fon4food pass
RUN addmailuser user2@mail.fon4food pass
RUN addmailuser user3@mail.fon4food pass

