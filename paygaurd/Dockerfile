
FROM node:22-bookworm-slim

WORKDIR /app

COPY . .

RUN npm ci

RUN npm run db:generate --workspace=@repo/db

RUN npx turbo run build --filter=express-server...

ENV NODE_ENV=production

EXPOSE 10000

CMD ["npm", "run", "start", "--workspace=express-server"]
