# Template Next TypeScript

## Prerequisites

- Download extension **ESLint** and **Prettier - Code formatter** in your VSCode.
- Install **node** >= 16.13.0
- Install **pnpm** >= 7.17.0

- **(Required for MacOSX):** Run this to give permission husky to run pre-commit hook.

```bash
$ chmod ug+x .husky/*
$ chmod ug+x .git/hooks/*
```

- **(Optional):** Do this if you are using **nvm**.

```bash
$ nvm use or nvm use 16.13.0
```

- Create `.env` file and refer to `.env-sample` file for the required secrets.
- Add this to `.env`

```bash
NEXT_SHARP_PATH=/tmp/node_modules/sharp
```

## Without Docker

- Install dependencies.

```bash
$ pnpm i
```

- Run in **development** mode.

```bash
$ pnpm dev
```

- Run in **production** mode.

- Build the application.

```bash
$ pnpm start
```

## With Docker

- Build container in **development** mode.

```bash
$ docker compose build or pnpm docker:local build
```

```bash
$ docker compose build --no-cache or pnpm docker:local build --no-cache # Build with no cache
```

- Run container in **development** mode.

```bash
$ docker compose up or pnpm docker:local up # Run in foreground
```

```bash
$ docker compose up -d or pnpm docker:local up -d # Run in background
```

- Check the container's logs.

```bash
$ docker logs <container_name>
```

- Shutdown container.

```bash
$ docker compose down or pnpm docker:local down
```

```bash
$ docker compose down -v or pnpm docker:local down -v # Remove including the volumes
```

- If you want to access the container.

```bash
$ docker exec -it <container_name> bash
```

- Build container in **production** mode.

```bash
$ docker compose -f docker-compose.prod.yaml build or pnpm docker:prod build
```

```bash
$ docker compose -f docker-compose.prod.yaml build or pnpm docker:prod build # Build with no cache
```

- Run container in **production** mode.

```bash
$ docker compose -f docker-compose.prod.yaml up or pnpm docker:prod up # Run in foreground
```

```bash
$ docker compose -f docker-compose.prod.yaml up -d or pnpm docker:prod up -d # Run in background
```
