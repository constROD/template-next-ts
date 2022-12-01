import axios from 'axios';
import { GetStaticProps, GetStaticPropsResult, NextPage } from 'next';
import React from 'react';
import { ITodo } from 'shared/interfaces/Todo';

interface Props {
  todos: ITodo[];
}

export const getStaticProps: GetStaticProps<Props> = async (): Promise<
  GetStaticPropsResult<Props>
> => {
  const { data: todos } = await axios(
    'https://jsonplaceholder.typicode.com/todos?_start=0&_limit=10'
  );

  return {
    props: { todos }, // todos object will be pass as props in the component.
    revalidate: 1, // It will update the page every 1 second
  };
};

const SSGPage: NextPage<Props> = ({ todos }) => {
  return (
    <React.Fragment>
      <h1>SSG Page</h1>

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

export default SSGPage;
