import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import * as api from '../apis/apiClient'
import { TaskData } from '../../models/todos'

export function useGetTodos() {
  const query = useQuery({
    queryKey: ['todos'],
    queryFn: api.getAllTodos,
  })
  return query
}

export function useAddTodo() {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: api.addNewTodo,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['todos'] })
    },
  })
}

export function useDeleteTodo() {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: api.deleteTodoById,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['todos'] })
    },
  })
}

export function useUpdateComplete() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: async ({
      id,
      updateComplete,
    }: {
      id: number
      updateComplete: TaskData
    }) => {
      return await api.updateComplete(id, updateComplete)
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['todos'] })
    },
  })
}
