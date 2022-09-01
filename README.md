# Usage

1. Install dependencies: `yarn`

2. Rename `.env.example` to `.env`, and run `prisma db push` to synchronize the data model

3. Start the server: `yarn dev`. visit: http://127.0.0.1:3001/api/sessions

> **(Optional)** the project has built-in a docker compose, run `yarn dev:db` to run database automatic.

5. 
    Type 'Prisma.SessionCreateInput' is automatically generated.
    Whenever you modify file 'prisma/schema.prisma' and then run command:
        prisma generate
        prisma migrate dev
    The types is automatically updated.
   
    About CRUD: https://www.prisma.io/docs/concepts/components/prisma-client/crud
   
---

# Project Layout

```

```

---


# Lifecycle

1. `app.ts` -> collect env vars `constants` -> collect env files `variables.env`

2. envs ready, call `bootstrap.before()`

3. lift `routing-controllers` -> lift Koa middlewares -> register `Container` for DI

4. start Koa &amp; invoke `bootstrap.after()` after startup

---

# Databases

The project uses Prisma as the intelligent ORM tool by default. Supports `PostgreSQL`, `MySQL` and `SQLite`.

- You can change the data type and connection method in the `.env` file
- After each modification to file `/prisma/schema.prisma`, you need to run `prisma migrate dev` to migrate the database.
- After each modification to file `/prisma/schema.prisma`, you need to run `prisma generate` to sync types.

---

# About Environments

When nodejs is running, `ENV` does not mean `NODE_ENV`:

- After NodeJS project is built, we always run it as `NODE_ENV=PRODUCTION`, which may affect some framework optimizations.
- `NODE_ENV` only identifies the NodeJS runtime, independent of the business.
- You should use `ENV` to identify the environment.

For the data settings of each environment, you can refer to the following:

- **Development Mode** (`ENV=development`): read configurations from `configs/constants/development.ts` file, but it will still be overwritten by `.env` file.

- **Production Mode** (`ENV=production`): read configurations from `configs/constants/production.ts` file, but it will still be overwritten by `.env` file.

---

# Reference

- [routing-controllers](https://github.com/typestack/routing-controllers)
- [Prisma](https://www.prisma.io/docs/concepts)
