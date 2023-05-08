import { useRef } from 'react';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { Todo } from './hooks/useTodos';
import axios from 'axios';

const TodoForm = () => {
  const queryClient = useQueryClient();
  const addTodo = useMutation({
    mutationFn: (todo: Todo) =>
      axios
        .post<Todo>('https://jsonplaceholder.typicode.com/posts', todo)
        .then(res => res.data),
    onSuccess: (savedTodo, newTodo) => {
      // APPROACH 1: Invalidate the cache (that triggers a refresh)
      // queryClient.invalidateQueries({ queryKey: ['todos'] });
      // No funciona amb jsonplaceholder pq els objectes no es creen (fake API)

      // APPROACH 2: Update the data in the cache
      queryClient.setQueryData<Todo[]>(['todos'], (todos = []) => [
        savedTodo,
        ...todos
      ]);
    }
  });
  const ref = useRef<HTMLInputElement>(null);

  return (
    <form
      className='row mb-3'
      onSubmit={event => {
        event.preventDefault();
        if (ref.current?.value) {
          addTodo.mutate({
            id: 0,
            title: ref.current.value,
            completed: false,
            userId: 1
          });
        }
      }}>
      <div className='col'>
        <input ref={ref} type='text' className='form-control' />
      </div>
      <div className='col'>
        <button className='btn btn-primary'>Add</button>
      </div>
    </form>
  );
};

export default TodoForm;
