import axios from 'axios';
import { GetStaticProps, GetStaticPropsResult, NextPage } from 'next';
import Link from 'next/link';
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
  };
};

const TodosPage: NextPage = ({ todos }: any) => {
  return (
    <React.Fragment>
      <h1>Todos Page</h1>

      <ul>
        {(todos || []).map((todo: any) => (
          <Link key={todo.id} href={`/todos/${todo.id}`}>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '5vw 40vw auto',
                alignItems: 'center',
                cursor: 'pointer',
                padding: 10,
              }}
            >
              <span>{todo.id}</span>
              <span>{todo.title}</span>
              <span>{todo.completed ? 'Done' : 'Pending'}</span>
            </div>
          </Link>
        ))}
      </ul>
    </React.Fragment>
  );
};

export default TodosPage;
