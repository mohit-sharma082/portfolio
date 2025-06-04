# --------------------------------------------
# 1. Build stage: install deps and build app
# --------------------------------------------
FROM node:18-alpine AS builder

WORKDIR /app

# Copy manifests for pnpm
COPY package.json pnpm-lock.yaml ./

# Install pnpm and project dependencies
RUN npm install -g pnpm \
    && pnpm install --frozen-lockfile

# Copy source and build
COPY . .
RUN pnpm build

# --------------------------------------------
# 2. Production stage: only runtime artifacts
# --------------------------------------------
FROM node:18-alpine AS runner

# Create a non-root user
RUN addgroup -S nextjs && adduser -S nextjs -G nextjs

WORKDIR /app

# Copy manifests again for prod-only install
COPY package.json pnpm-lock.yaml ./

# Install pnpm and only production deps
RUN npm install -g pnpm \
    && pnpm install --prod --frozen-lockfile

# Copy the built output from builder
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/next.config.js ./

# Drop to non-root user
USER nextjs

ENV NODE_ENV=production
EXPOSE 3000

# Start Next.js in production mode
CMD ["pnpm", "start"]
