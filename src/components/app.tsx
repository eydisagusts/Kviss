import { useState } from "react";
import ControlPanel from "./ControlPanel";
import CategoriesPickCategory from "./CategoriesPickCategory";

const App: React.FC = () => {
  const [chosenCategories, setChosenCategories] = useState<string[]>([]);

  return (
    <div>
      <ControlPanel chosenCategories={chosenCategories} setChosenCategories={setChosenCategories} />
      <CategoriesPickCategory chosenCategories={chosenCategories} />
    </div>
  );
};

export default App;


