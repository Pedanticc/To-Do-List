import React, { useState, useEffect } from "react";

export const FormSection = ({ todos, setTodos }) => {
  const [taskTitle, setTaskTitle] = useState("");
  const [taskDescription, setTaskDescription] = useState("");

  const taskTitleChange = (e) => {
    setTaskTitle(e.target.value);
  };

  const taskDescriptionChange = (e) => {
    setTaskDescription(e.target.value);
  };

  const createTodo = () => {
    if (taskTitle.length > 0) {
      const newTodo = {
        id: crypto.randomUUID(),
        task: taskTitle,
        description: taskDescription,
      };

      setTodos((prevTodos) => [...prevTodos, newTodo]);

      const updatedTodos = [...todos, newTodo];
      localStorage.setItem("todos", JSON.stringify(updatedTodos));

      setTaskTitle("");
      setTaskDescription("");
    }
  };

  useEffect(() => {
    const storedTodos = localStorage.getItem("todos");
    if (storedTodos) {
      setTodos(JSON.parse(storedTodos));
    }
  }, []);

  return (
    <div className="h-100% min-w-335px max-w-335px flex flex-col border-r-1 border-r-solid border-r-#c7c7c711 ">
      <p className="text-#7060c2 font-RebondBold text-25px gradian-text">
        To Do Hive
      </p>
      <p className="text-#9b96b0 font-RebondThin text-18px mt-5px">
        An unnecessarily beautified To Do List
      </p>
      <form action="" className="mt-40px w-100%">
        <p className="text-#9b96b0 font-RebondRegular p-l-10px mb-10px text-14px">
          Task Title:
        </p>
        <input
          type="text"
          placeholder="Title"
          value={taskTitle}
          onChange={taskTitleChange}
          className="text-box mb-20px h-40px text-#9b96b0 p-15px font-RebondThin rounded-30px"
        />
        <p className="text-#9b96b0 font-RebondRegular p-l-10px mb-10px text-14px">
          Task Discription:
        </p>
        <textarea
          placeholder="Discription"
          value={taskDescription}
          onChange={taskDescriptionChange}
          className="text-box h-200px text-#9b96b0 font-RebondThin rounded-30px resize-none p-15px"
        />
      </form>
      <div className="w-100% h-fit flex justify-center items-center p-r-35px m-t-35px">
        <div className="w-30% h-2px center-self gradian-background rounded-20px"></div>
      </div>
      <div className="w-100% flex justify-center p-r-35px mt-35px">
        <div
          className="w-200px h-50px color-#7060c2 create-btn font-RebondRegular flex justify-center items-center rounded-40px cursor-pointer create-btn-hover"
          onClick={createTodo}
        >
          Create
        </div>
      </div>
      <div className="w-100% flex justify-center p-r-35px mt-30px">
        <p className="text-#9b96b0 font-RebondThin flex justify-center text-13px">
          Made with Spite by{" "}
          <a
            className="color-#7060c2 p-l-1 neon underline"
            href="https://github.com/Pedanticc"
          >
            Pedantic
          </a>
        </p>
      </div>
    </div>
  );
};
