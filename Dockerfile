# ./larascript-node-frontend/Dockerfile

# Stage 1: Build the React app with Vite
FROM node:20 AS build
WORKDIR /app
COPY package*.json ./
COPY tsconfig.json ./
RUN npm install
COPY . .
RUN npm run build

# Debug step: List the contents of the /app directory and the build directory
RUN ls -al /app
RUN ls -al /app/dist

# Stage 2: Serve the app with Nginx
FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
