import Link from 'next/link';
import { ROUTES } from 'shared/constants/commons';
import { type Todo } from 'src/features/todos/types';

type Props = { todos: Todo[] };

export function Todos({ todos }: Props) {
  return (
    <ul>
      {todos.map(todo => (
        <Link key={todo.id} href={`${ROUTES.TODOS}/${todo.id}`}>
          <li className="grid grid-cols-[5vw_40vw_auto] items-center">
            <span>{todo.id}</span>
            <span>{todo.title}</span>
            <span>{todo.completed ? 'Done' : 'Pending'}</span>
          </li>
        </Link>
      ))}
    </ul>
  );
}
