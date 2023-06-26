# Template Next TypeScript

## Prerequisites

- Download extension **ESLint** and **Prettier ESLint** in your VSCode.
- Install **node** 18.16.1
- Install **pnpm** 8.6.1

---

- **(Required for MacOSX):** Execute this command to grant Husky the necessary permissions to run the pre-commit hook.

```bash
chmod ug+x .husky/*
chmod ug+x .git/hooks/*
```

- **(Optional):** Do this if you are using **nvm**.

```bash
nvm use # For MacOSX and Linux
nvm use $(cat .nvmrc) # For Windows (Git Bash)
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
