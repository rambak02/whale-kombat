FROM node:alpine AS builder
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build 
FROM nginx:stable-alpine
COPY --from=builder /app/dist /usr/share/nginx/html
COPY --from=builder /app/.nginx/nginx.conf /etc/nginx/sites-enabled/default
EXPOSE 80
ENTRYPOINT [ "nginx", "-g", "daemon off;" ]
