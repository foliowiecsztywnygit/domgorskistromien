FROM node:22-bookworm-slim

# Create app directory
WORKDIR /app

# Install build dependencies for compiling native addons (sqlite3) against Debian glibc
RUN apt-get update && apt-get install -y --no-install-recommends \
    python3 \
    make \
    g++ \
    && rm -rf /var/lib/apt/lists/*

# Copy package.json and package-lock.json
COPY package*.json ./

# Install all dependencies and compile sqlite3 from source
RUN npm ci
RUN npm rebuild sqlite3 --build-from-source

# Copy the rest of the application
COPY . .

# Build the Vite frontend
RUN npm run build

# Environment settings
ENV NODE_ENV=production
ENV PORT=3001

# Expose the port the app runs on
EXPOSE 3001

# Start the Node Express server
CMD ["npm", "start"]
