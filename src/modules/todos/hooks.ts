import { useQuery } from '@tanstack/react-query';
import * as TodoService from './services';

/**
 * * queryKey format: /todos?limit=10 to ['todos', { limit: 10 }]
 * * queryKey format: /todos/{id} to ['todos', id]
 */

export function useGetTodos(params?: { limit: number }) {
  return useQuery({
    queryKey: ['todos', params],
    queryFn: () => TodoService.list(params),
  });
}

export function useGetTodo(id: number | string) {
  return useQuery({
    queryKey: ['todos', id],
    queryFn: () => TodoService.get(id),
  });
}
