FROM node:24-bullseye

WORKDIR /app

COPY package.json pnpm-lock.yaml ./
RUN npm install -g pnpm \
  && pnpm install --frozen-lockfile --prefer-offline

COPY . .

EXPOSE 3000
CMD ["pnpm", "run", "start"]
