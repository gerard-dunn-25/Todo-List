import request from 'superagent'

import type { newTodoId, Task, TaskData } from '../../models/todos'

export async function getAllTodos(): Promise<Task[]> {
  const res = await request.get('/api/v1/todos/')
  return res.body
}

export async function addNewTodo(
  newTask: TaskData,
): Promise<newTodoId | undefined> {
  try {
    const res = await request.post('/api/v1/todos/').send(newTask)
    return res.body
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message)
    }
  }
}
