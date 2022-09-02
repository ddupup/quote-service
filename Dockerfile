# Install dependencies only when needed
FROM node:18-alpine3.15 AS deps
# RUN apk add --no-cache libc6-compat
WORKDIR /app
COPY package.json yarn.lock ./

RUN yarn config set registry https://registry.npm.taobao.org
RUN yarn install --frozen-lockfile 

# Rebuild the source code only when needed
FROM node:18-alpine3.15 AS builder
WORKDIR /app
COPY . .
COPY --from=deps /app/node_modules ./node_modules
RUN npx prisma generate
RUN yarn build 
# RUN yarn install --production --ignore-scripts --prefer-offline

# 
FROM node:18-alpine3.15 AS runner
WORKDIR /app

ENV NODE_ENV production


COPY --from=builder /app/dist ./dist
COPY --from=builder /app/prisma ./prisma
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json

EXPOSE 3001

ENV PORT 3001


CMD ["npm", "start"]