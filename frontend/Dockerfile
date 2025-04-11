FROM node:20

WORKDIR /app

COPY package.json package-lock.json ./

# Set environment variables to avoid architecture-specific dependencies issues
ENV ROLLUP_SKIP_NODE_RESOLUTION=true
ENV NODE_ENV=production

# Install dependencies with clean install
RUN npm ci --omit=dev

COPY . .

EXPOSE 3000

# Create startup script
RUN echo '#!/bin/sh \n\
if [ "$NODE_ENV" = "development" ]; then \
  npm install && npm run dev; \
else \
  npm install && npm run build && serve -s dist -l 3000; \
fi' > /app/startup.sh && chmod +x /app/startup.sh

# Use the startup script
CMD ["/app/startup.sh"]
