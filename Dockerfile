# Use the official Node.js image as a base
FROM node:20 AS build

# Set the working directory
WORKDIR /app

# Copying package.json (and package-lock.json) before other files in the Dockerfile is a best practice for optimizing the build process. Here are the main reasons:

# 	1.	Layer Caching: Docker builds images in layers, and it caches each layer. When you copy package.json and install dependencies, Docker creates a layer for that step. If your application code changes but package.json does not, Docker can reuse the cached layer for installing dependencies, speeding up the build process.
# 	2.	Efficient Builds: By separating the dependency installation from the application code, you minimize the number of times dependencies need to be installed. If you copy all the files first and then run npm install, any change in your application code would invalidate the cache for the entire build process, forcing Docker to reinstall all dependencies every time.
# 	3.	Faster Iteration: This approach allows for faster iterations during development. When you’re actively making changes to your app, only the layers related to the application code need to be rebuilt, making the feedback loop quicker.

# By structuring your Dockerfile this way, you can significantly improve build efficiency and reduce unnecessary installations during development and deployment.
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the app for production
RUN npm run build

# Use a lightweight web server to serve the static files
FROM nginx:alpine

# Copy built files from the previous stage
COPY --from=build /app/build /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start Nginx server
CMD ["nginx", "-g", "daemon off;"]
