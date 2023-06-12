import { useQuery } from '@tanstack/react-query';
import { TodoService } from 'shared/services/todos';
import { type ErrorInstance } from 'shared/types/commons';
import { logger } from 'shared/utils/commons';

/**
 * * queryKey format: /todos?limit=10 to ['todos', { limit: 10 }]
 * * queryKey format: /todos/{id} to ['todos', id]
 */

export function useGetTodos(params?: { limit: number }) {
  return useQuery({
    queryKey: ['todos', params],
    queryFn: async () => {
      const { data } = await TodoService.list(params);

      /* Mock the records based on the limit */
      if (params?.limit) return data.slice(0, params.limit);

      return data;
    },
    onError: error => {
      const errorInstance = error as ErrorInstance;

      logger({
        path: 'modules/todos/hooks.ts',
        event: 'useGetTodos: onError',
        log: errorInstance,
      });
    },
  });
}

export function useGetTodo(id: number | string) {
  return useQuery({
    queryKey: ['todos', id],
    queryFn: async () => {
      const { data } = await TodoService.get(id);
      return data;
    },
    onError: error => {
      const errorInstance = error as ErrorInstance;

      logger({
        path: 'modules/todos/hooks.ts',
        event: 'useGetTodo: onError',
        log: errorInstance,
      });
    },
  });
}
