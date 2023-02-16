import { useQuery } from '@tanstack/react-query';
import { TodoService } from './services';

export const useTodos = (params?: { start: number; limit: number }) => {
  return useQuery({
    queryKey: ['todos', params],
    queryFn: () => TodoService.list(params),
  });
};

export const useTodo = (id: number | string) => {
  return useQuery({
    queryKey: ['todos', id],
    queryFn: () => TodoService.get(id),
  });
};
