import axios from 'axios';
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext, NextPage } from 'next';
import React from 'react';
import { ITodo } from 'shared/interfaces/Todo';

interface Props {
  todo: ITodo;
}

export const getStaticPaths: GetStaticPaths = async () => {
  const { data: todos } = await axios(
    'https://jsonplaceholder.typicode.com/todos?_start=0&_limit=10'
  );

  const paths = todos.map((todo: any) => ({
    params: { id: todo.id.toString() },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<Props> = async (context: GetStaticPropsContext) => {
  const id = context.params?.id;
  const { data: todo } = await axios(`https://jsonplaceholder.typicode.com/todos/${id}`);

  return {
    props: { todo }, // It will be passed as props in the component
  };
};

const TodoPage: NextPage<Props> = ({ todo }) => {
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
};

export default TodoPage;
