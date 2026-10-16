
FROM node:22-bookworm-slim

WORKDIR /apps

COPY . .

RUN npm ci

RUN DATABASE_URL="postgresql://dummy:dummy@localhost:5432/dummy?schema=public" npm run db:generate --workspace=@repo/db

RUN npx turbo run build --filter=express-server...

ENV NODE_ENV=production

EXPOSE 10000

CMD ["npm", "run", "start", "--workspace=express-server"]
