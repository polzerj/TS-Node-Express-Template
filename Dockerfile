FROM node:16-alpine
WORKDIR /app
COPY . .

RUN npm i --production \
    && npm i -g typescript \
    && tsc \
    && rm -r src \
    && npm remove -g typescript
EXPOSE 5000

CMD [ "node", "dist/server.js" ]