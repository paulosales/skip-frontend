FROM node:15.8.0-alpine3.13 as build-stage
RUN mkdir /app
ENV LC_ALL=en_US.UTF-8
ENV NODE_ENV=production 
WORKDIR  /app
COPY package.json .
RUN npm install
COPY . .
RUN ls -la node_modules/@types/
RUN npm run build

FROM nginx:1.19-alpine
COPY ./config/nginx/default.conf /etc/nginx/conf.d/default.conf
COPY --from=build-stage /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]