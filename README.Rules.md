# Rules

## Naming conventions

- `kebab-case` - for all folders/files names except `src/modules/**/components/*` files.
- `UPPER_CASE` - for constants.
- `PascalCase` - for classes, types and `src/modules/**/components/*` files.
- `snake_case` - for database tables and columns.

## Folder structure

- `src` - main source code.
- `src/pages` - pages (e.g. `index`, `login`, `register`).
- `src/modules` - modules (e.g. `users`, `auth`, `reports`).
- `src/shared` - shared code (e.g. `utils`, `constants`, `types`, `middlewares`).

## Steps to create a new module

1. Create a property in `src/serverless/constants.ts` for the `<module-name>` (look for `FUNCTIONS` or `RESOURCES`). This will be used for the **serverless configuration** as well as for the **routes**.
2. Create a property in `src/shared/constants.ts` for the table name. This will be used for **PostgreSQL**. - if your lambda function doesn't need to access the database, you can skip this step. **(Optional)**
3. Create a new folder called `module-name` in `src/modules`
4. Create a new folder called `functions` in `src/modules/<module-name>`
5. Create a new files `constants.ts`, `helpers.ts`, `types.ts` and `validations.ts` in `src/modules/<module-name>`
6. In the `src/modules/<module-name>/constants.ts` file create a routes object for the endpoints.
7. Create a `services.ts` file in `src/modules/<module-name>/functions` - this includes the **services** for the endpoints. - You can extends your service class to `src/shared/services/pg.ts` if you want to use the **PostgreSQL** service.
8. Create a new file in `src/modules/<module-name>/functions/<create|get|update|delete|etc>.ts` - this will be the endpoints for the module and it also includes the endpoint's **handler** and **swagger documentation**.
9. Create a new file in `src/modules/<module-name>/functions/handler.ts` - this includes the main **handler**, consolidations of all the endpoints's **routes** and **swagger documentations**.
10. **Note:** `constants.ts`, `helpers.ts`, `types.ts`, `validations.ts` and `services.ts` can be created as folders if you want to split the files into multiple files.
11. You now have a new module. You can now add the **serverless configuration** by adding a file in `src/serverless/<functions|resources>/<module-name>.ts` depending on the type of the module and import those files in `src/serverless/<functions|resources>/index.ts`. - So that the **serverless** can pick up the configuration for cloud deployment.

## Pattern Summary

2. `src/modules/<module-name>`
3. `src/serverless/<functions|resources>/<module-name>.ts`
4. `src/serverless/<functions|resources>/index.ts`
