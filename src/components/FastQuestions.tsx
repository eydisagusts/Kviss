
import { useRef, useState } from "react";
import type { Scores } from "./ScoreContext"; // Adjust the path as necessary

interface FastQuestionsProps {

  team: keyof Scores;

  teamName: string;

  onSubmit: (team: keyof Scores, totalCorrect: number) => void;

}

const FastQuestions = ({ team, teamName, onSubmit }: FastQuestionsProps) => {
  const [answers, setAnswers] = useState(Array(14).fill(""));
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  const assignRef =
    (index: number) =>
    (el: HTMLInputElement | null): void => {
      inputRefs.current[index] = el;
    };

  const handleAnswerChange = (index: number, value: string) => {
    const newAnswers = [...answers];
    newAnswers[index] = value;
    setAnswers(newAnswers);
  };

  const calculateTotalCorrect = () => {
    return answers.reduce((sum, answer) => sum + (answer === "1" ? 1 : 0), 0);
  };

  const handleReset = () => {
    setAnswers(Array(14).fill(""));
  };

  const handleSubmit = () => {
    const totalCorrect = calculateTotalCorrect();
    onSubmit(team, totalCorrect);
  };

  return (
    <div className="flex flex-col items-center mb-8 border-2 rounded-lg border-white p-4">
      <h3 className="text-center text-2xl text-white mb-8">{teamName}</h3>
      <div className="grid grid-cols-1 gap-2 h-48 overflow-y-scroll scrollbar-thin scrollbar-thumb-gray-500">
        {answers.map((answer, index) => (
          <div key={`fast-${team}`} className="flex items-center justify-between">
            <span className="text-white text-xl">{index + 1}.</span>
            <input
              ref={assignRef(index)}
              value={answer}
              onChange={(e) => handleAnswerChange(index, e.target.value)}
              className="w-16 text-center text-xl bg-transparent border-b-2 border-white text-white"
              autoComplete="off"
            />
          </div>
        ))}
      </div>
      <div className="mt-10 text-center text-white text-2xl">Stig: {calculateTotalCorrect()}</div>
      <button type="button" onClick={handleSubmit} className="mt-4 px-6 py-1 bg-white text-[#119DBF] rounded-xl hover:bg-gray-300">
        Submit
      </button>
      <button type="button" onClick={handleReset} className="mt-2 px-6 py-1 bg-red-500 text-black rounded-xl hover:bg-red-800">
        Reset
      </button>
    </div>
  );
};

export default FastQuestions;