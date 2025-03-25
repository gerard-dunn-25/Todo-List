// add imports

import type { Task, TaskData } from '../../models/todos'
import connection from './connection'

// getAllTodos

export async function getAllTodos(): Promise<Task[]> {
  return await connection('todos').select(
    'id',
    'task',
    'due',
    'priority',
    'description',
    'status',
    'is_complete as isComplete',
  )
}

// addNewTodo

export async function addNewTodo(newTask: TaskData): Promise<number> {
  const addResult = await connection('todos')
    .insert({
      task: newTask.task,
      due: newTask.due,
      priority: newTask.priority,
      description: newTask.description,
      status: newTask.status,
      is_complete: newTask.isComplete,
    })
    .returning('id')

  return addResult[0]
  // const {
  //   task,
  //   due,
  //   priority,
  //   description,
  //   status,
  //   isComplete: is_complete,
  // } = newTask
  // const [taskEntry] = await connection('todos').insert({
  //   task,
  //   due,
  //   priority,
  //   description,
  //   status,
  //   is_complete,
  // })
  // return taskEntry
}
