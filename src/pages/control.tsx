import ControlPanel from "../components/ControlPanel";

const ControlPage = () => {
  const chosenCategories: string[] = []; // Replace with actual chosen categories
  const setChosenCategories = (categories: string[]) => {
    // Replace with actual function to set chosen categories
  };

  return <ControlPanel chosenCategories={chosenCategories} setChosenCategories={setChosenCategories} />;
};

export default ControlPage;