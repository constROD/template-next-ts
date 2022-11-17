FROM node:16-alpine3.14

# Environment Variables
ARG APP_ENV
ENV APP_ENV=${APP_ENV}

# Create /app folder and add permission on the /app folder.
RUN mkdir -p /app && chmod -R 775 /app

# Go to /app folder.
WORKDIR /app

# Copy all required files from the repository for building the application.
COPY next.config.js next.config.js
COPY tsconfig.json tsconfig.json
COPY package.json package.json
COPY yarn.lock yarn.lock
COPY public public
COPY src src

# Install dependencies and build the application.
RUN echo ${APP_ENV} | base64 -d >.env
RUN yarn && yarn build

# Set PORT to 80
EXPOSE 3000

# Start the application.
CMD yarn start -p 80
