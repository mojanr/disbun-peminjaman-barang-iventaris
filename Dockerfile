FROM node:14.16-alpine
ENV NODE_ENV=production \
    POST=3000
WORKDIR /usr/src/app
# COPY ["package.json", "package-lock.json*", "npm-shrinkwrap.json*", "./"]
COPY ["package.json", "./"]
# RUN npm install --production --silent && mv node_modules ../
RUN npm install
# RUN npm run build:backend
COPY . .
EXPOSE 3000
# CMD ["npm", "run", "start:backend"]
CMD ["node", "dist/apps/backend/main.js"]
