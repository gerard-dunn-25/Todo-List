import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { addNewTodo, getAllTodos } from '../apis/apiClient'

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
