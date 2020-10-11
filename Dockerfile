FROM node:12 as build-step

RUN mkdir /app

WORKDIR /app

COPY ./mern-client/package.json /app

RUN npm install

COPY ./mern-client /app

RUN npm run build

FROM nginx:1.19.3

COPY --from=build-step /app/build /usr/share/nginx/html