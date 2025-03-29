export interface TaskData {
  task: string
  isComplete: boolean
}

export interface Task extends TaskData {
  id: number
}

export interface newTodoId {
  id: number
}
