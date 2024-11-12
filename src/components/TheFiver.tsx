import type { Scores } from "@/components/ScoreContext";
import { useState } from "react";

interface TheFiverProps {

  team: keyof Scores;

  teamName: string;

  question: string;

  options: string[];

  onSubmit: (team: keyof Scores, totalPoints: number) => void;

}

const TheFiver = ({ team, teamName, question, options, onSubmit }: TheFiverProps) => {
  const [selectedOptions, setSelectedOptions] = useState(Array(options.length).fill(false));

  const handleOptionClick = (index: number) => {
    const newSelectedOptions = [...selectedOptions];
    newSelectedOptions[index] = !newSelectedOptions[index];
    setSelectedOptions(newSelectedOptions);
  };

  const calculateTotalPoints = () => {
    return selectedOptions.reduce((sum, selected) => sum + (selected ? 1 : 0), 0);
  };

  const handleReset = () => {
    setSelectedOptions(Array(options.length).fill(false));
  };

  const handleSubmit = () => {
    const totalPoints = calculateTotalPoints();
    onSubmit(team, totalPoints);
  };

  return (
    <div className="flex flex-col items-center mb-8 border-2 rounded-lg border-white p-4">
      <h3 className="text-center text-2xl text-white mb-8">{teamName}</h3>
      <p className="text-white text-xl mb-4">{question}</p>
      <div className="grid grid-cols-1 gap-2">
        {options.map((option, index) => (
          <button
            key={`fiver-${team}-${option}`}
            type="button"
            onClick={() => handleOptionClick(index)}
            className={`px-4 py-2 rounded-lg ${selectedOptions[index] ? "bg-green-500" : "bg-white"} text-[#119DBF]`}
          >
            {option}
          </button>
        ))}
      </div>
      <div className="mt-10 text-center text-white text-2xl">Stig: {calculateTotalPoints()}</div>
      <button type="button" onClick={handleSubmit} className="mt-4 px-6 py-1 bg-white text-[#119DBF] rounded-xl hover:bg-gray-300">
        Submit
      </button>
      <button type="button" onClick={handleReset} className="mt-2 px-6 py-1 bg-red-500 text-black rounded-xl hover:bg-red-800">
        Reset
      </button>
    </div>
  );
};

export default TheFiver;