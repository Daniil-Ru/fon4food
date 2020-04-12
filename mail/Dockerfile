FROM tvial/docker-mailserver:latest

COPY postfix-accounts.cf /tmp/docker-mailserver/postfix-accounts.cf

RUN addmailuser lisa@mail.fon4food pass
RUN addmailuser anton@mail.fon4food pass

