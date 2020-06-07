FROM node:current-slim
WORKDIR /app

# Install client dependencies.
COPY package* ./
RUN npm ci

# Copy frontend source code to the image filesystem.
COPY . .

# Expose and Run the client app.
EXPOSE 3000
CMD [ "npm", "start" ]