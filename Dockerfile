# --------------------------------------------------------------
# 1) Build stage: install deps, build & export to "out/"
# --------------------------------------------------------------
FROM node:18-alpine AS builder

# 1.1 Set working directory
WORKDIR /app

# 1.2 Copy only manifest files first (for layer caching)
COPY package.json pnpm-lock.yaml ./

# 1.3 Install pnpm and project dependencies
RUN npm install -g pnpm \
    && pnpm install --frozen-lockfile

# 1.4 Copy the rest of your source code
COPY . .

# 1.5 Build & export (assumes "pnpm build" calls `next build && next export`)
RUN pnpm build

# --------------------------------------------------------------
# 2) Runner stage: serve "/app/out" via nginx
# --------------------------------------------------------------
FROM nginx:stable-alpine AS runner

# 2.1 Remove default nginx.conf (optional, but ensures no conflicts)
RUN rm /etc/nginx/conf.d/default.conf

# 2.2 Copy our custom nginx.conf into place
COPY nginx.conf /etc/nginx/conf.d/default.conf

# 2.3 Copy the exported static files from the "builder" stage
COPY --from=builder /app/out /usr/share/nginx/html

# 2.4 Expose port 80
EXPOSE 80

# 2.5 Launch nginx in the foreground
CMD ["nginx", "-g", "daemon off;"]
