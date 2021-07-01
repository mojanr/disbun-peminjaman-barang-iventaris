FROM node:12.18-alpine
ENV NODE_ENV=production
WORKDIR /usr/src/app
# COPY ["package.json", "package-lock.json*", "npm-shrinkwrap.json*", "./"]
# RUN npm install --production --silent && mv node_modules ../
# RUN npm install
# RUN npm run build:backend
COPY . .
EXPOSE 3000
# CMD ["npm", "run", "start:backend"]
CMD ["node", "dist/apps/backend/main.js"]
