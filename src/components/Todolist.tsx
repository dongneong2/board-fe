import React, { ChangeEvent, useEffect, useState } from 'react';
import {
  createTodoItem,
  deleteTodoItem,
  getTodolist,
  updateTodoItem,
} from '../services/TodolistApi';
import { TodolistModel } from '../models/Todolist';

const Todolist = () => {
  const [description, setDescription] = useState<string>('');
  const [todolist, setTodolist] = useState<TodolistModel[]>([]);

  const initTodolistData = async () => {
    const response = await getTodolist();
    if (response) {
      setTodolist(response);
      setDescription('');
    }
  };

  const handleRegistButton = async () => {
    if (description != '') {
      await createTodoItem(description);
      initTodolistData();
    }
  };

  const handleCompleteButton = async (id: number) => {
    await updateTodoItem(id);
    initTodolistData();
  };

  const handleDeleteButton = async (id: number) => {
    await deleteTodoItem(id);
    initTodolistData();
  };

  const handleChangeEvent = (e: ChangeEvent<HTMLInputElement>) => {
    setDescription(e.target.value);
  };

  useEffect(() => {
    initTodolistData();
  }, []);

  return (
    <div>
      <h1>TO-DO List</h1> <br />
      <input
        type="text"
        name="description"
        value={description}
        placeholder="To Do item"
        onChange={handleChangeEvent}
      ></input>
      <button onClick={handleRegistButton}>등록</button>
      <br />
      {todolist.length > 0 ? (
        todolist.map((data, index) => (
          <div key={index}>
            <br />
            {index + 1}번째 할 일 :{' '}
            <span
              style={{ textDecoration: data.completed ? 'line-through' : '' }}
            >
              {data.description}
            </span>
            / {data.createdDate} /{' '}
            <button
              onClick={() => {
                handleCompleteButton(data.id);
              }}
            >
              완료
            </button>
            /{' '}
            <button
              onClick={() => {
                handleDeleteButton(data.id);
              }}
            >
              삭제
            </button>
            <br />
          </div>
        ))
      ) : (
        <>
          <br />
          데이터 없음
        </>
      )}
    </div>
  );
};

export default Todolist;
