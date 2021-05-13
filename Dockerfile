FROM node:10.24.1

# Change working directory
WORKDIR /app
# Update packages and install dependency packages for services
RUN apt-get update \
 && apt-get dist-upgrade -y \
 && apt-get clean \
 && echo 'Finished installing dependencies'

COPY . /app

# Copy package.json and package-lock.json


# Install npm  packages 
RUN npm install  

RUN npm install mongoose


EXPOSE 3000

CMD ["npm", "start"]
