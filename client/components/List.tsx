import { useGetTodos, useDeleteTodo } from '../hooks/useTodos'
import '../styles/todoList.scss'

export default function List() {
  const { data: todos, isLoading, isError } = useGetTodos()
  const deleteTodo = useDeleteTodo()

  if (isError) {
    return <p>Something went wrong...</p>
  }

  if (isLoading) {
    return <p>Loading... </p>
  }

  return (
    <div className="container">
      <ul className="todo-list">
        {todos?.map((todo) => (
          <li key={todo.id} className="list-task">
            <div className="task-details">
              {/* <input type="checkbox" className="toggle" /> */}
              <span>{todo.task}</span>
              <span style={{ fontSize: 15 }}>{todo.due}</span>
            </div>
            <button
              className="delete-btn"
              onClick={(e) => {
                e.stopPropagation()
                deleteTodo.mutate(todo.id)
              }}
              aria-label="Delete task"
            >
              ✘
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}
