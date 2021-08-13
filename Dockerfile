FROM node:16-alpine
WORKDIR /app
COPY . .

RUN npm run build \
    && npm prune --production \
    && rm -r src 

CMD [ "node", "dist/server.js" ]
