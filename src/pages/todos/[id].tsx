import axios from 'axios';
import {
  GetStaticPaths,
  GetStaticPathsResult,
  GetStaticProps,
  GetStaticPropsContext,
  GetStaticPropsResult,
  NextPage,
} from 'next';
import { styled } from 'shared/theme';
import { ITodo } from 'shared/types/Todo';

interface Props {
  todo: ITodo;
}

export const getStaticPaths: GetStaticPaths = async (): Promise<GetStaticPathsResult> => {
  const { data: todos } = await axios(
    'https://jsonplaceholder.typicode.com/todos?_start=0&_limit=10'
  );

  const paths = todos.map((todo: any) => ({
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

export const getStaticProps: GetStaticProps<Props> = async (
  context: GetStaticPropsContext
): Promise<GetStaticPropsResult<Props>> => {
  const id = context.params?.id;
  const { data: todo } = await axios(`https://jsonplaceholder.typicode.com/todos/${id}`);

  return {
    props: { todo }, // todo object will be pass as props in the component.
    revalidate: 1, // It will update the page every 1 second
  };
};

const TodoPageWrapper = styled.div``;

const TodoPage: NextPage<Props> = ({ todo }) => {
  return (
    <TodoPageWrapper>
      <h1>Todo {todo.id}</h1>
      <ul>
        <li>ID: {todo.id}</li>
        <li>TODO: {todo.title}</li>
        <li>STATUS: {todo.completed ? 'Done' : 'Pending'}</li>
      </ul>
    </TodoPageWrapper>
  );
};

export default TodoPage;
