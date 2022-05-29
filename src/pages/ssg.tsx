import axios from 'axios';
import { GetStaticProps, NextPage } from 'next';
import React from 'react';
import { ITodo } from 'shared/interfaces/Todo';

interface Props {
  todos: ITodo[];
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const { data: todos } = await axios(
    'https://jsonplaceholder.typicode.com/todos?_start=0&_limit=10'
  );

  return {
    props: { todos }, // It will be passed as props in the component
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
