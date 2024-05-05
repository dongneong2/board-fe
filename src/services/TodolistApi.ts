import axios from "axios";

const url = "http://localhost:8080/todolist";

export const getTodolist = async () => {
  const result = await axios.get(url);
  return result.data || [];
};

export const createTodoItem = async (description: string) => {
  const result = await axios.post(url, null, {
    params: {
      description: description,
    },
  });
  console.log("result create", result);
};

export const updateTodoItem = async (id: number) => {
  const result = await axios.put(`${url}?id=${id}`);
  console.log("result update", result);
};

export const deleteTodoItem = async (id: number) => {
  const result = await axios.delete(`${url}?id=${id}`);
  console.log("result delete", result);
};
