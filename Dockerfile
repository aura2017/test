# filename: dockerfile


# Base image
FROM node:16.20.2


# Get the latest version of Playwright
FROM mcr.microsoft.com/playwright:v1.48.0


# Set the working directory
WORKDIR /automation/playwright


#ENV PATH /automation/playwright/node_modules/.bin:$PATH


# Copy package.json and package-lock.json
COPY package*.json ./


RUN apt-get update && apt-get install -y ca-certificates


# Install dependencies
RUN npm install
# Install browsers
RUN npx playwright install
# Copy the rest of the application files
COPY . .


# Set the entry point for the container
#CMD ["npx", "playwright", "test"]
CMD [ "npx", "playwright", "test", "--reporter=list" ]