import { FormSection } from "./components/FormSection";
import { TasksSection } from "./components/TasksSection";
import React, { useState } from "react";

function App() {
  const [todos, setTodos] = useState([]);
  return (
    <div className="w-950px min-w-880px h-650px rounded-8px border-1 border-solid border-#ffffff1a p-35px flex drop-shadows frosted-container">
      <FormSection todos={todos} setTodos={setTodos} />
      <TasksSection todos={todos} />
    </div>
  );
}

export default App;
