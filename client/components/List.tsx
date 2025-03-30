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
              <div className="todoTask">
                <div className="todo-task-desc">
                  <span>{todo.task}</span>
                </div>
              </div>

              <div className="todo-delete-btn">
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
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
