
FROM node:18-alpine

WORKDIR /app

COPY backend/package*.json ./

RUN npm install --production

COPY backend/ .

EXPOSE 5000

CMD ["node", "index.js"]

# Dockerfile in client folder
FROM node:18-alpine as build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

FROM nginx:alpine
COPY --from=build /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]