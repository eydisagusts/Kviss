import type { Scores } from "@/components/ScoreContext";
import { useState, useRef } from "react";

interface PopularLinesProps {

  team: keyof Scores;

  teamName: string;

  onSubmit: (team: keyof Scores, totalPoints: number) => void;

}

const PopularLines = ({ team, teamName, onSubmit }: PopularLinesProps) => {
  const [answers, setAnswers] = useState(Array(5).fill(""));
  const [points, setPoints] = useState(Array(5).fill(0));
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  const handleAnswerChange = (index: number, value: string) => {
    const newAnswers = [...answers];
    newAnswers[index] = value;
    setAnswers(newAnswers);
  };

  const handlePointsChange = (index: number, value: number) => {
    const newPoints = [...points];
    newPoints[index] = value;
    setPoints(newPoints);
  };

  const assignRef =
    (index: number) =>
    (el: HTMLInputElement | null): void => {
      inputRefs.current[index] = el;
    };

  const calculateTotalPoints = () => {
    return points.reduce((sum, point) => sum + point, 0);
  };

  const handleReset = () => {
    setAnswers(Array(2).fill(""));
    setPoints(Array(2).fill(0));
  };

  const handleSubmit = () => {
    const totalPoints = calculateTotalPoints();
    onSubmit(team, totalPoints);
  };

  return (
    <div className="flex flex-col items-center mb-8 border-2 rounded-lg border-white p-4">
      <h3 className="text-center text-2xl text-white mb-8">{teamName}</h3>
      <div className="grid grid-cols-1 gap-8">
        {answers.map((answer, index) => (
          <div key={`PopularLines-${team}-${index}-${answer}`} className="flex items-center justify-between">
            <span className="text-white text-xl mr-1">{index + 1}.</span>
            <select
              value={points[index]}
              onChange={(e) => handlePointsChange(index, +e.target.value)}
              className="ml-4 text-xl bg-transparent border-b-2 border-white text-white"
            >
              <option value={0}>0 Points</option>
              <option value={1}>1 Point</option>
            </select>
          </div>
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

export default PopularLines;