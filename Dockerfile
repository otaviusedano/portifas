# syntax=docker/dockerfile:1

# --- Stage 1: build ---
FROM node:22-alpine AS build
WORKDIR /app

# Instala dependências (cache eficiente)
COPY package.json package-lock.json ./
RUN npm ci

# Copia o restante e gera o build de produção
COPY . .
RUN npm run build

# --- Stage 2: runtime (nginx) ---
FROM nginx:1.27-alpine AS runtime

# Config do nginx com fallback de SPA
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Artefatos estáticos gerados pelo Vite
COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
