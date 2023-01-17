import axios from 'axios';
import { GetServerSideProps, GetServerSidePropsResult, NextPage } from 'next';
import React from 'react';
import { Todo } from 'shared/types/Todo';

interface Props {
  todos: Todo[];
}

// eslint-disable-next-line @typescript-eslint/require-await
export const getServerSideProps: GetServerSideProps<Props> = async ({
  res,
}): Promise<GetServerSidePropsResult<Props>> => {
  res.setHeader(
    'Cache-Control',
    `s-maxage=${60 * 60 * 24 * 365}, stale-while-revalidate=${60 * 60 * 24}`
  );

  const { data: todos } = await axios(
    'https://jsonplaceholder.typicode.com/todos?_start=0&_limit=10'
  );

  return {
    props: { todos }, // todos object will be pass as props in the component.
  };
};

const SSRPage: NextPage<Props> = ({ todos }) => {
  return (
    <React.Fragment>
      <h1>SSR Page</h1>

      <ul>
        {(todos || []).map(todo => (
          <li
            key={todo.id}
            style={{ display: 'grid', gridTemplateColumns: '5vw 40vw auto', alignItems: 'center' }}
          >
            <span>{todo.id}</span>
            <span>{todo.title}</span>
            <span>{todo.completed ? 'Done' : 'Pending'}</span>
          </li>
        ))}
      </ul>
    </React.Fragment>
  );
};

export default SSRPage;
