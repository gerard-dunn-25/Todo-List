import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { addNewTodo, deleteTodoById, getAllTodos } from '../apis/apiClient'

export function useGetTodos() {
  const query = useQuery({
    queryKey: ['todos'],
    queryFn: getAllTodos,
  })
  return query
}

export function useAddTodo() {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: addNewTodo,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['todos'] })
    },
  })
}

export function useDeleteTodo() {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: deleteTodoById,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['todos'] })
    },
  })
}
