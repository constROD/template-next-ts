import { Todos } from 'modules/todos';
import { type Todo } from 'modules/todos/types';
import { type GetStaticProps, type InferGetStaticPropsType } from 'next';
import React from 'react';
import { TodoService } from 'shared/services/todo';

export const getStaticProps: GetStaticProps<{ todos: Todo[] }> = async () => {
  const params = { limit: 10 };
  const { data } = await TodoService.list(params);

  /* Mock the records based on the limit */
  let todos = [...data];
  if (params?.limit) todos = todos.slice(0, params.limit);

  return {
    props: { todos }, // `todos` object will be pass as props in the component.
  };
};

export default function TodosPage({ todos }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <React.Fragment>
      <h1>ISR Page</h1>

      <Todos todos={todos} />
    </React.Fragment>
  );
}
