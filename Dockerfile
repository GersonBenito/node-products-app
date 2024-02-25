FROM node:20.9.0-slim
WORKDIR /app
COPY . .
RUN npm i && npm run tsc
CMD ["npm", "run", "dev"]