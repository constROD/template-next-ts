import { type ERROR_TYPES } from 'shared/constants/commons';

export type ErrorInstance = Error & { name: keyof typeof ERROR_TYPES; response: unknown };
