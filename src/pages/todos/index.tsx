import { type GetStaticProps, type InferGetStaticPropsType } from 'next';
import { TodoService } from 'shared/services/todos';
import { Todos } from 'src/features/todos/components/todos';
import { type Todo } from 'src/features/todos/types';

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
    <>
      <h1>ISR Page</h1>

      <Todos todos={todos} />
    </>
  );
}
