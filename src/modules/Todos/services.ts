import ky from 'ky-universal';
import { Todo } from './types';

class TodoClass {
  async list(params?: { start: number; limit: number }) {
    const response = await ky
      .get('https://jsonplaceholder.typicode.com/todos', {
        searchParams: params,
      })
      .json();
    return response as Todo[];
  }

  async get(id: number | string) {
    const response = await ky.get(`https://jsonplaceholder.typicode.com/todos/${id}`).json();
    return response as Todo;
  }
}

export const TodoService = new TodoClass();
