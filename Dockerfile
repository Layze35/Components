FROM oven/bun:1.0.28

WORKDIR /src/app

COPY package*.json ./
RUN bun i
COPY . .
# RUN bun run build
EXPOSE 3000
CMD ["bun", "run", "dev"]

