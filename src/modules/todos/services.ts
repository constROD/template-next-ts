import axios from 'axios';
import { type Todo } from './types';

export async function list(params?: { limit: number }) {
  const { data } = await axios.get<Todo[]>('https://jsonplaceholder.typicode.com/todos', {
    params,
  });

  // * Mocking the limit param.
  if (params?.limit) data.splice(params.limit, data.length);

  return data;
}

export async function get(id: number | string) {
  const { data } = await axios.get<Todo>(`https://jsonplaceholder.typicode.com/todos/${id}`);
  return data;
}
