import { FormSection } from "./components/FormSection";
import { TasksSection } from "./components/TasksSection";

function App() {
  return (
    <div className="w-950px min-w-880px h-650px rounded-8px border-1 border-solid border-#ffffff1a p-35px flex drop-shadows frosted-container">
      <FormSection></FormSection>
      <TasksSection></TasksSection>
    </div>
  );
}

export default App;
