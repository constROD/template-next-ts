# Rules

## Naming conventions

- `kebab-case` - for all folders/files.
- `UPPER_CASE` - for constants.
- `PascalCase` - for classes and types.
- `snake_case` - for database tables and columns.
- `camelCase` - for functions and etc.

## Folder structure

- `src` - main source code.
- `src/pages` - page routes (e.g. `login`, `register`, `dashboard`).
- `src/modules` - modules (e.g. `auth`, `dashboard`).
- `src/shared` - shared code (e.g. `utils`, `constants`, `types`, `hooks`, `ui`).

## File Organization

- `src/shared/services` - for api services.
- `src/modules/<module-name>/constants` - for constants that are related only to the module.
- `src/modules/<module-name>/hooks` - for hooks that are related only to the module (e.g. `useLogin`, `useRegister`).
- `src/modules/<module-name>/types` - for types that are related only to the module.
- `src/modules/<module-name>/utils` - for utils that are related only to the module.
- `src/modules/<module-name>/validations` - for validations that are related only to the module.
- `src/modules/<module-name>/components` - for components that are related only to the module.
- `src/pages/<page-name>` - can contain multiple module components depending on the page.
