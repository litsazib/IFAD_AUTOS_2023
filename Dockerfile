#base.image
FROM node:16-alpine

RUN mkdir -p /use/app
WORKDIR /usr/app

#copy from to 
COPY ./ ./

RUN npm install
RUN npm run build  

EXPOSE 3000
CMD ["npm","start"]