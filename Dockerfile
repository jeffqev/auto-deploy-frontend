FROM node:15.8.0-alpine AS node-build
ARG API_URL
WORKDIR /app
COPY package*.json /app/
RUN npm install
COPY ./ /app/
ENV REACT_APP_API_URL="$API_URL"
RUN npm run build

FROM socialengine/nginx-spa
COPY --from=node-build /app/build/ /app