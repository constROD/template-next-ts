import {
  type GetStaticPaths,
  type GetStaticProps,
  type GetStaticPropsContext,
  type InferGetStaticPropsType,
} from 'next';
import { TodoService } from 'shared/services/todos';
import { type Todo } from 'src/features/todos/types';

export const getStaticPaths: GetStaticPaths = async () => {
  const params = { limit: 10 };
  const { data } = await TodoService.list(params);

  /* Mock the records based on the limit */
  let todos = [...data];
  if (params?.limit) todos = todos.slice(0, params.limit);

  const paths = todos.map(todo => ({
    params: { id: todo.id.toString() },
  }));

  /* fallback
    false - Pre-render only the paths based on the api call at build time then return non-existing page to 404
    true - for non-existing page instead of returning 404 it gives you capability to show something using router.isFallback while fetching the data for new generated page. Note: make sure you have revalidate option in the getStaticProps return.
  */

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<{ todo: Todo }> = async (
  context: GetStaticPropsContext
) => {
  const id = context.params?.id as string;
  const { data: todo } = await TodoService.get(id);

  return {
    props: { todo }, // <todo> object will be passed as props in the component.
    revalidate: 1, // It will update the page every 1 second
  };
};

export default function TodoPage({ todo }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <div>
      <h1>Todo {todo.id}</h1>
      <ul>
        <li>ID: {todo.id}</li>
        <li>TODO: {todo.title}</li>
        <li>STATUS: {todo.completed ? 'Done' : 'Pending'}</li>
      </ul>
    </div>
  );
}
