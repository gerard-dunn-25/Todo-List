export interface TaskData {
  task: string
  due: string
  priority: number
  description: string
  status: string
  isComplete: boolean
}

export interface Task extends TaskData {
  id: number
}
