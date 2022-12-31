# Develop Stage
FROM node:19 as develop-stage
WORKDIR /app
COPY package*.json ./
RUN npm -g add @quasar/cli
COPY . .

# Build Stage
FROM develop-stage as build-stage
RUN npm install
RUN quasar build

# Production stage
FROM nginx:1.17.5-alpine as production-stage
COPY --from=build-stage /app/dist/spa /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]