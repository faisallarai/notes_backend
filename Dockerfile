# Image we want to build from
FROM node:10

# Docker inputs
ARG APP_BASE_NAME
ARG APP_ENV

# Set environment variable
ENV APP_BASE_NAME ${APP_BASE_NAME}
ENV APP_ENV ${APP_ENV}
ENV NODE_ENV production

# Create app directory
WORKDIR /usr/src/app

# Install dependencies
COPY package*.json ./
RUN npm ci --only=production

# Bundle app source
COPY . .

EXPOSE 8080
CMD [ "node", "index.js"]

