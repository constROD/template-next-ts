import axios from 'axios';
import { NextPage } from 'next';
import React from 'react';

export async function getServerSideProps() {
  const { data: todos } = await axios(
    'https://jsonplaceholder.typicode.com/todos?_start=0&_limit=10'
  );

  return {
    props: { todos }, // It will be passed as props in the component
  };
}

const SSRPage: NextPage = ({ todos }: any) => {
  return (
    <React.Fragment>
      <h1>SSR Page</h1>

      <ul>
        {(todos || []).map((todo: any) => (
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
