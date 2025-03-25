import { useGetTodos } from '../hooks/useTodos'

export default function List() {
  const { data: todos, isLoading, isError } = useGetTodos()

  if (isError) {
    return <p>Something went wrong...</p>
  }

  if (isLoading) {
    return <p>Loading... </p>
  }

  return (
    <div>
      <ul>{todos?.map((todo) => <li key={todo.id}>{todo.task}</li>)}</ul>
    </div>
  )
}
