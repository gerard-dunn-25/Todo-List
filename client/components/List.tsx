import {
  useGetTodos,
  useDeleteTodo,
  useUpdateComplete,
} from '../hooks/useTodos'
import '../styles/todoList.scss'
import '../styles/index.scss'
// import { useState } from 'react'
import { Task } from '../../models/todos'

export default function List() {
  const { data: todos, isLoading, isError } = useGetTodos()
  // const [task, setTask] = useState('')
  const deleteTodo = useDeleteTodo()
  const checkComplete = useUpdateComplete()

  const handleComplete = (todo: Task) => {
    checkComplete.mutate({
      id: todo.id,
      updateComplete: { task: todo.task, isComplete: !todo.isComplete },
    })
  }

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
          <li
            key={todo.id}
            className={`list-task ${todo.isComplete ? 'completed' : 'incomplete'}`}
          >
            <div className="task-details">
              <input
                type="checkbox"
                onChange={() => handleComplete(todo)}
                checked={todo.isComplete}
                className="custom-checkbox"
                aria-label="Completed checkbox"
              />
              <div className="todoTask">
                <span>{todo.task}</span>
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
