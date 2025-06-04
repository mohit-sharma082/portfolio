# --------------------------------------------
# 1. Build stage: install deps and build
# --------------------------------------------
FROM node:18-alpine AS builder

# Set working directory
WORKDIR /app

# Copy package manifests first (for caching deps)
COPY package.json yarn.lock* package-lock.json* ./

# Install all dependencies
RUN yarn install --frozen-lockfile

# Copy the rest of the source code
COPY . .

# Build the Next.js app for production
RUN yarn build

# --------------------------------------------
# 2. Production stage: run only what's needed
# --------------------------------------------
FROM node:18-alpine AS runner

# Create a non-root user to run the app
RUN addgroup -S nextjs && adduser -S nextjs -G nextjs

WORKDIR /app

# Copy package manifests again to install only prod deps
COPY package.json yarn.lock* package-lock.json* ./

# Install only production dependencies
RUN yarn install --frozen-lockfile --production

# Copy the built output and public folder from builder
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/next.config.js ./

# Switch to non-root user
USER nextjs

# Force production mode
ENV NODE_ENV=production

# Expose default Next.js port
EXPOSE 3000

# Start the app
CMD ["yarn", "start"]
