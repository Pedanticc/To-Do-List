import React from "react";

export const TasksSection = ({ todos }) => {
  const reversedTodos = todos.slice().reverse();

  return (
    <div className="w-100% p-l-20px">
      <p className="color-#7060c2 font-RebondBold text-25px border-b-1 border-b-solid border-b-#c7c7c711 p-b-10px">
        List
      </p>
      <ul className="h-93% flex flex-col p-10px gap-10px list-none overflow-y-scroll overflow-x-hidden items-center">
        {reversedTodos.map((todo) => (
          <li
            key={todo.id}
            className="h-fit create-btn rounded-10px relative p-10px p-l-20px w-447px max-w-447px task-border cursor-pointer appear-from-left"
          >
            <p className="text-#7866d1 font-RebondRegular m-t-5px h-fi">
              {todo.task}
            </p>
            <p className="text-#9b96b0 font-RebondThin text-15px m-t-10px break-words h-fit">
              {todo.description}
            </p>
            <div className="gradian-background absolute w-2px h-70% rounded-10px m-auto top-0 bottom-0 left-10px"></div>
            <div className="gradian-background absolute w-10px h-10px rounded-10px right-20px top-19px"></div>
          </li>
        ))}
      </ul>
    </div>
  );
};
