import { type Todo } from 'modules/todos/types';
import { type GetStaticProps, type InferGetStaticPropsType } from 'next';
import React from 'react';
import { TodoService } from 'shared/services/todos';

export const getStaticProps: GetStaticProps<{ todos: Todo[] }> = async () => {
  const params = { limit: 10 };
  const { data } = await TodoService.list(params);

  /* Mock the records based on the limit */
  let todos = [...data];
  if (params?.limit) todos = todos.slice(0, params.limit);

  return {
    props: { todos }, // `todos` object will be pass as props in the component.
    revalidate: 1, // It will update the page every 1 second
  };
};

export default function SSGPage({ todos }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <h1>SSG Page</h1>

      <ul>
        {todos.map(todo => (
          <li key={todo.id} className="grid grid-cols-[5vw_40vw_auto] items-center">
            <span>{todo.id}</span>
            <span>{todo.title}</span>
            <span>{todo.completed ? 'Done' : 'Pending'}</span>
          </li>
        ))}
      </ul>
    </>
  );
}
