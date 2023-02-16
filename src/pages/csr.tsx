import { useTodos } from 'modules/Todos/hooks';
import { NextPage } from 'next';
import React from 'react';

const CSRPage: NextPage = () => {
  const params = { start: 0, limit: 10 };

  const { data: todos = [], isLoading } = useTodos(params);

  if (isLoading) return <div>Loading...</div>;

  return (
    <React.Fragment>
      <h1>CSR Page</h1>

      <ul>
        {todos.map(todo => (
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
