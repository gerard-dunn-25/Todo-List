// add imports

import type { Task, TaskData } from '../../models/todos'
import connection from './connection'

// getAllTodos

export async function getAllTodos(): Promise<Task[]> {
  return await connection('todos')
    .select(
      'id',
      'task',
      'due',
      'priority',
      'description',
      'status',
      'is_complete as isComplete',
    )
    .orderBy('priority', 'asc')
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
}

// delete todo

export async function deleteTodo(id: number): Promise<number> {
  return await connection('todos').where({ id }).del()
}

// // get todo by id

// export async function getTodoById(id: number): Promise<Task> {
//   return await connection('todos')
//     .where({ id })
//     .select(
//       'id',
//       'task',
//       'due',
//       'priority',
//       'description',
//       'status',
//       'is_complete as isComplete',
//     )
//     .first()
// }

// edit todo

// export async function editTodo(
//   id: number,
//   editedTask: Partial<TaskData>,
// ): Promise<number> {
//   return await connection('todos').where({ id }).update({
//     task: editedTask.task,
//     due: editedTask.due,
//     priority: editedTask.priority,
//     description: editedTask.description,
//     status: editedTask.status,
//     is_complete: editedTask.isComplete,
//   })
// }
