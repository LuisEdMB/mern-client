#!/bin/bash
app="mern-client"
docker build -t ${app} .
docker run --env-file=./mern-client/.env -d -p 2000:80 --name=${app} ${app}