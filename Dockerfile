FROM oven/bun:1
WORKDIR /app
COPY . .
RUN bun install
RUN bun run build
 
ARG PORT
EXPOSE ${PORT:-3000}
 
CMD ["bun", "run", "./.output/server/index.mjs"]
