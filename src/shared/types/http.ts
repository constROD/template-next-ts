import { type HTTP_RESPONSES } from 'shared/constants/http';

type HttpResponse = (typeof HTTP_RESPONSES)[keyof typeof HTTP_RESPONSES];

export type APIResponse<TData = undefined, TError = undefined> = Omit<
  HttpResponse,
  'statusCode'
> & {
  data?: TData;
  error?: TError;
};
