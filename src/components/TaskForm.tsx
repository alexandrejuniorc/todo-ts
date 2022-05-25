import React, { useState, ChangeEvent, FormEvent, useEffect } from 'react';
// scss
import '../scss/TaskForm.scss';
// interface
import { ITask } from '../interfaces/Task';

interface Props {
  btnText: string;
  taskList: ITask[];
  setTaskList?: React.Dispatch<React.SetStateAction<ITask[]>>; // dispatch an event and will work with an ITask array
}

const TaskForm = ({ btnText, taskList, setTaskList }: Props) => {
  const [id, setId] = useState<number>(0);
  const [title, setTitle] = useState<string>('');
  const [difficulty, setDifficulty] = useState<number>(0);

  // function that makes the inclusion of items in the system
  const addTaskHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const id = Math.floor(Math.random() * 1000); // round down a random number to 1000
    const newTask: ITask = { id, title, difficulty };

    setTaskList!([...taskList, newTask]); // The ! is used when you are sure that this item will come to the state
    setTitle('');
    setDifficulty(0);

    console.log(taskList);
  };
  //handle input changes
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.name === 'title') {
      setTitle(e.target.value);
    } else {
      setDifficulty(parseInt(e.target.value)); // change number to string
    }
    // console.log(title);
    // console.log(difficulty);
  };

  return (
    <form onSubmit={addTaskHandler} className="form">
      <div className="inputContainer">
        <label htmlFor="title">Titulo:</label>
        <input
          type="text"
          name="title"
          placeholder="Título da tarefa"
          onChange={handleChange}
          value={title}
        />
      </div>
      <div className="inputContainer">
        <label htmlFor="difficulty">Dificuldade:</label>
        <input
          type="text"
          name="difficulty"
          placeholder="Dificuldade da tarefa"
          onChange={handleChange}
          value={difficulty}
        />
      </div>
      <input type="submit" value={btnText} />
    </form>
  );
};

export default TaskForm;
