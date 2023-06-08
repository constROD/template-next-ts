# Template Next TypeScript

## Prerequisites

- Download extension **ESLint** and **Prettier ESLint** in your VSCode.
- Install **node** 16.14.2
- Install **pnpm** 8.6.1

- **(Required for MacOSX):** Run this to give permission husky to run pre-commit hook.

```bash
chmod ug+x .husky/*
chmod ug+x .git/hooks/*
```

- **(Optional):** Do this if you are using **nvm**.

```bash
nvm use # For MacOSX and Linux
nvm use $(cat .nvmrc) # For windows (Git Bash)
```

- Create `.env` file.
- and refer to the `<secret-name>.example` for the required variables.

- Install dependencies.

```bash
pnpm i
```

**Development Mode:**

```bash
pnpm dev
```

**Production Mode:**

- Build the application.

```bash
pnpm build
pnpm start
```
