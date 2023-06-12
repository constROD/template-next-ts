import { type Todo } from 'modules/todos/types';
import { httpClient } from 'shared/utils/http';

export * as TodoService from './todos';

export async function list(params?: { limit: number }) {
  const response = await httpClient.get<Todo[]>('https://jsonplaceholder.typicode.com/todos', {
    params,
  });
  return response;
}

export async function get(id: number | string) {
  const response = await httpClient.get<Todo>(`https://jsonplaceholder.typicode.com/todos/${id}`);
  return response;
}
