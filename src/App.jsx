import { FormSection } from "./components/FormSection";
import { TasksSection } from "./components/TasksSection";

function App() {
  return (
    <div className="bg-#1A262D w-880px min-w-880px h-650px rounded-15px border-2 border-solid border-#39db7c63 p-35px flex gap-10px drop-shadows">
      <FormSection></FormSection>
      <TasksSection></TasksSection>
    </div>
  );
}

export default App;
