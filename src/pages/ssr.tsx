import { type Todo } from 'modules/todos/types';
import { type GetServerSideProps, type InferGetServerSidePropsType } from 'next';
import React from 'react';
import { TodoService } from 'shared/services/todo';

export const getServerSideProps: GetServerSideProps<{ todos: Todo[] }> = async () => {
  const params = { limit: 10 };
  const { data } = await TodoService.list(params);

  /* Mock the records based on the limit */
  let todos = [...data];
  if (params?.limit) todos = todos.slice(0, params.limit);

  return {
    props: {
      todos,
    },
  };
};

export default function SSRPage({ todos }: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <React.Fragment>
      <h1>SSR Page</h1>

      <ul>
        {todos.map(todo => (
          <li key={todo.id} className="grid grid-cols-[5vw_40vw_auto] items-center">
            <span>{todo.id}</span>
            <span>{todo.title}</span>
            <span>{todo.completed ? 'Done' : 'Pending'}</span>
          </li>
        ))}
      </ul>
    </React.Fragment>
  );
}
