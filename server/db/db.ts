// add imports

import type { Task, TaskData } from '../../models/todos'
import connection from './connection'

// getAllTodos

export async function getAllTodos(): Promise<Task[]> {
  return await connection('todos')
    .select('id', 'task', 'is_complete as isComplete')
    .orderBy('due', 'asc')
}

// addNewTodo

export async function addNewTodo(newTask: TaskData): Promise<number> {
  const addResult = await connection('todos')
    .insert({
      task: newTask.task,
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
//     is_complete: editedTask.isComplete,
//   })
// }
