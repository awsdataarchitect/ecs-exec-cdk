# Use the official Nginx image as base
FROM --platform=linux/amd64  nginx:latest
USER root
RUN      echo 'Hello, World!' >> /usr/share/nginx/html/index.html
EXPOSE 80
VOLUME ["/var/cache/nginx"]
VOLUME ["/var/run"]
VOLUME ["/tmp/nginx"]
VOLUME ["/etc/nginx"]