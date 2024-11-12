import { useState } from "react";
import type { Scores } from "./ScoreContext";

interface CategoryQuestionsProps {
  onSubmit: (team: keyof Scores, totalCorrect: number) => void;
  chosenCategories: string[];
  setChosenCategories: (categories: string[]) => void;
}

const categories = [
  "Dýr",
  "Tónlist",
  "Áfengi",
  "Bílpróf",
  "Vinahópur",
  "Útlönd",
];

const CategoryQuestions = ({ onSubmit, chosenCategories, setChosenCategories }: CategoryQuestionsProps) => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedTeam, setSelectedTeam] = useState<keyof Scores | null>(null);
  const [points, setPoints] = useState<number>(0);

  const handleCategoryClick = (category: string) => {
    if (selectedCategory === category) {
      setSelectedCategory(null);
    } else if (!chosenCategories.includes(category)) {
      setSelectedCategory(category);
    }
  };

  const handleSubmit = () => {
    if (selectedCategory && selectedTeam !== null) {
      onSubmit(selectedTeam, points);
      setChosenCategories([...chosenCategories, selectedCategory]);
      setSelectedCategory(null);
      setSelectedTeam(null);
      setPoints(0);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center text-center bg-[#119DBF]">
      <div className="w-full max-w-2xl">
        {categories.map((category) => (
          <div key={category} className="mb-4 flex items-center justify-between">
            <div
              className={`w-64 bg-blue-700 rounded-3xl p-2 text-2xl border-3 shadow-lg shadow-blue-900 cursor-pointer ${
                chosenCategories.includes(category) ? "bg-blue-900" : ""
              }`}
              onClick={() => handleCategoryClick(category)}
              onKeyUp={(e) => e.key === 'Enter' && handleCategoryClick(category)}
            >
              {category}
            </div>
            {selectedCategory === category && (
              <div className="flex items-center space-x-4 ml-4">
                <select
                  value={points}
                  onChange={(e) => setPoints(Number(e.target.value))}
                  className="text-xl bg-transparent border-b-2 border-white text-white"
                >
                  <option value={0}>0 Points</option>
                  <option value={1}>1 Point</option>
                </select>
                <select
                  value={selectedTeam ?? ""}
                  onChange={(e) => setSelectedTeam(e.target.value as keyof Scores)}
                  className="text-xl bg-transparent border-b-2 border-white text-white"
                >
                  <option value="" disabled>
                    Select Team
                  </option>
                  <option value="team1">Gin & Nonic</option>
                  <option value="team2">Ace & Æiiiii</option>
                </select>
                <button
                  type="button"
                  onClick={handleSubmit}
                  className="px-6 py-1 bg-white text-[#119DBF] rounded-xl hover:bg-gray-300"
                >
                  Submit
                </button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryQuestions;