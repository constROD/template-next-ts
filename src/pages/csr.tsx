import axios from 'axios';
import { NextPage } from 'next';
import React from 'react';
import { useAsyncFn, useEffectOnce } from 'react-use';
import { ITodo } from 'shared/interfaces/Todo';

const CSRPage: NextPage = () => {
  const [{ value: todos }, retrieveAsync] = useAsyncFn(async () => {
    const { data } = await axios('https://jsonplaceholder.typicode.com/todos?_start=0&_limit=10');
    return data as ITodo[];
  });

  useEffectOnce(() => {
    retrieveAsync();
  });

  return (
    <React.Fragment>
      <h1>CSR Page</h1>

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

export default CSRPage;
