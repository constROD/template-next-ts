import Todos from 'modules/todoss';
import { useGetTodos } from 'modules/todoss/hooks';
import { type NextPage } from 'next';
import React from 'react';

const CSRPage: NextPage = () => {
  const params = { limit: 10 };
  const { data: todos = [], isLoading } = useGetTodos(params);

  if (isLoading) return <div>Loading...</div>;

  return (
    <React.Fragment>
      <h1>CSR Page</h1>

      <Todos todos={todos} />
    </React.Fragment>
  );
};

export default CSRPage;
