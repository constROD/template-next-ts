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
- `src/modules` - modules (e.g. `auth`, `elements`, `partials`, `layouts`).
- `src/modules/elements` - elements (e.g. `button`, `input`, `select`).
- `src/modules/partials` - mostly combination of elements (e.g. `header`, `footer`, `sidebar`).
- `src/modules/layouts` - layouts (e.g. `page`, `root`).
- `src/shared` - shared code (e.g. `utils`, `constants`, `types`, `hooks`).

**IMPORTANT NOTE:** The `src/modules` directory should contain a components folder. However, `src/modules/elements`, `src/modules/partials`, and `src/modules/layouts` are exceptions to this rule, as these three represent the core reusable UI components.
