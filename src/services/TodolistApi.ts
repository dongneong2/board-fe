import axios from 'axios';

const url = process.env.REACT_APP_API_BASE_URL || '';
const path = '/todolist';

export const getTodolist = async () => {
  const result = await axios.get(`${url}${path}`);
  return result.data || [];
};

export const createTodoItem = async (description: string) => {
  const result = await axios.post(`${url}${path}`, null, {
    params: {
      description: description,
    },
  });
};

export const updateTodoItem = async (id: number) => {
  const result = await axios.put(`${url}${path}?id=${id}`);
};

export const deleteTodoItem = async (id: number) => {
  const result = await axios.delete(`${url}${path}?id=${id}`);
};
