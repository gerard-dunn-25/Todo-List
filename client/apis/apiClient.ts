import request from 'superagent'

import type { newTodoId, Task, TaskData } from '../../models/todos'

// get all todos

export async function getAllTodos(): Promise<Task[]> {
  const res = await request.get('/api/v1/todos/')
  return res.body
}

// add new todo

export async function addNewTodo(
  newTask: TaskData,
): Promise<newTodoId | undefined> {
  try {
    console.log(newTask)
    const res = await request.post('/api/v1/todos/').send(newTask)
    return res.body
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message)
    }
  }
}

// delete todo

export async function deleteTodoById(id: number) {
  try {
    const res = await request.delete(`/api/v1/todos/${id}`)
    return res.body
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message)
    }
  }
}

// select todo by id

export async function getTodoById(id: number): Promise<Task | undefined> {
  try {
    const res = await request.get(`/api/v1/todos/${id}`)
    return res.body
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message)
    }
  }
}

// update todo

export async function updateComplete(
  id: number,
  updatedComplete: TaskData,
): Promise<Task | undefined> {
  try {
    const res = await request.put(`/api/v1/todos/${id}`).send(updatedComplete)
    return res.body
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message)
    }
  }
}
