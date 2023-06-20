import { Todos } from 'modules/todos/components/todos';
import { useGetTodos } from 'modules/todos/hooks';

export default function CSRPage() {
  const params = { limit: 10 };
  const { data: todos = [], isLoading } = useGetTodos(params);

  if (isLoading) return <div>Loading...</div>;

  return (
    <>
      <h1>CSR Page</h1>
      <Todos todos={todos} />
    </>
  );
}
