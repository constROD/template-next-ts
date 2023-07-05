import { type GetServerSideProps, type InferGetServerSidePropsType } from 'next';
import { TodoService } from 'shared/services/todos';
import { type Todo } from 'src/features/todos/types';

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
    <>
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
    </>
  );
}
