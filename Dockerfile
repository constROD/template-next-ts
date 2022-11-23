FROM node:16-alpine3.14

# Environment Variables
ARG APP_ENV
ENV APP_ENV=${APP_ENV}

# Install pnpm globally
RUN npm install -g pnpm@7.17.0

# Create /app folder and add permission on the /app folder.
RUN mkdir -p /app && chmod -R 775 /app

# Go to /app folder.
WORKDIR /app

# Copy all required files from the repository for building the application.
COPY next.config.js next.config.js
COPY tsconfig.json tsconfig.json
COPY package.json package.json
COPY pnpm-lock.yaml pnpm-lock.yaml
COPY public public
COPY styles styles
COPY src src

# Install dependencies and build the application.
RUN echo ${APP_ENV} | base64 -d >.env
RUN pnpm install && pnpm build

# Set PORT
EXPOSE 3000

# Start the application.
CMD ["pnpm", "start", "-p", "80"]
