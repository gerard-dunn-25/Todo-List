import { useState } from 'react'
import { useAddTodo } from '../hooks/useTodos'
import { TaskData } from '../../models/todos'

// eslint-disable-next-line no-unused-vars
export default function AddTodo() {
  const [task, setTask] = useState('')
  const addTodo = useAddTodo()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (task.trim()) {
      const data: TaskData = {
        task: task,
        isComplete: false,
      }
      await addTodo.mutateAsync(data)
      setTask('')
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          className="new-todo"
          placeholder="What needs to be done?"
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          aria-label="Enter a new Todo task"
        />
      </form>
    </>
  )
}
