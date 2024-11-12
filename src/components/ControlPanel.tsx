import { useScores, type Scores } from "../components/ScoreContext"; // Adjust the path as necessary
import io from "socket.io-client";
import Image from "next/image";
import FastQuestions from "./FastQuestions";
import CategoryQuestions from "./CategoryQuestions";
import ThreeHints from "./ThreeHints";
import GuessTheWord from "./GuessTheWord";
import TheFiver from "./TheFiver";
import RettOrRangt from "./RettOrRangt"; // Import RettOrRangt component
import AlmennarSpurningar from "./AlmennarSpurningar"; // Import AlmennarSpurningar component
import PopularLines from "./PopularLines"; // Import PopularLines component
import HverErNaer from "./HverErNaer"; // Import HverErNaer component
import { useState } from "react";

interface ControlPanelProps {
  chosenCategories: string[];
  setChosenCategories: (categories: string[]) => void;
}

const socket = io("http://localhost:4000"); // Ensure this URL is correct

const ControlPanel = ({ chosenCategories, setChosenCategories }: ControlPanelProps) => {
  const { scores, setScores } = useScores();
  const [isClicked, setIsClicked] = useState(false);

  const updateScores = () => {
    socket.emit("updateScores", scores);
    setIsClicked(true);
    setTimeout(() => setIsClicked(false), 200); // Reset the clicked state after 200ms
  };

  const handleSubmit = (team: keyof Scores, totalCorrect: number) => {
    const updatedScores = { ...scores, [team]: (scores[team] ?? 0) + totalCorrect };
    setScores(updatedScores);
    socket.emit("updateScores", updatedScores);
  };

  return (
    <div className="w-full h-screen flex">
      <div className="w-2/3 h-full overflow-y-scroll p-8 bg-gradient-to-r from-blue-500 to-teal-500">
        <h2 className="text-center text-4xl text-white font-bold mb-8 drop-shadow-lg">Control Center</h2>
        <div className="space-y-12">
          <div>
            <div className="flex justify-center mb-8">
              <h4 className="text-center text-3xl text-white bg-blue-700 rounded-lg px-6 py-2 shadow-lg">HRAÐASPURNINGAR</h4>
            </div>
            <div className="grid grid-cols-2 gap-8">
              <FastQuestions key="fast-team1" team="team1" teamName="Gin & Nonic" onSubmit={handleSubmit} />
              <FastQuestions key="fast-team2" team="team2" teamName="Ace & Æiiiii" onSubmit={handleSubmit} />
            </div>
          </div>
          <div>
            <div className="flex justify-center mb-8">
              <h4 className="text-center text-3xl text-white bg-blue-700 rounded-lg px-6 py-2 shadow-lg">RÉTT EÐA RANGT</h4>
            </div>
            <div className="grid grid-cols-2 gap-8">
              <RettOrRangt key="rettorangt-team1" team="team1" teamName="Gin & Nonic" onSubmit={handleSubmit} />
              <RettOrRangt key="rettorangt-team2" team="team2" teamName="Ace & Æiiiii" onSubmit={handleSubmit} />
            </div>
          </div>
          <div>
            <div className="flex justify-center mb-8">
              <h4 className="text-center text-3xl text-white bg-blue-700 rounded-lg px-6 py-2 shadow-lg">ALMENNAR SPURNINGAR</h4>
            </div>
            <div className="grid grid-cols-2 gap-8">
              <AlmennarSpurningar key="almennarspurningar-team1" team="team1" teamName="Gin & Nonic" onSubmit={handleSubmit} />
              <AlmennarSpurningar key="almennarspurningar-team2" team="team2" teamName="Ace & Æiiiii" onSubmit={handleSubmit} />
            </div>
          </div>
          <div>
            <div className="flex justify-center mb-8">
              <h4 className="text-center text-3xl text-white bg-blue-700 rounded-lg px-6 py-2 shadow-lg">CATEGORIES</h4>
            </div>
            <div className="flex justify-center">
              <CategoryQuestions onSubmit={handleSubmit} chosenCategories={chosenCategories} setChosenCategories={setChosenCategories} />
            </div>
          </div>
          <div>
            <div className="flex justify-center mb-8">
              <h4 className="text-center text-3xl text-white bg-blue-700 rounded-lg px-6 py-2 shadow-lg">FRÆGAR LÍNUR</h4>
            </div>
            <div className="grid grid-cols-2 gap-8">
              <PopularLines key="popularlines-team1" team="team1" teamName="Gin & Nonic" onSubmit={handleSubmit} />
              <PopularLines key="popularlines-team2" team="team2" teamName="Ace & Æiiiii" onSubmit={handleSubmit} />
            </div>
          </div>
          <div>
            <div className="flex justify-center mb-8">
              <h4 className="text-center text-3xl text-white bg-blue-700 rounded-lg px-6 py-2 shadow-lg">HVOR ER NÆR</h4>
            </div>
            <div className="grid grid-cols-2 gap-8">
              <HverErNaer key="hverernaer-team1" team="team1" teamName="Gin & Nonic" onSubmit={handleSubmit} />
              <HverErNaer key="hverernaer-team2" team="team2" teamName="Ace & Æiiiii" onSubmit={handleSubmit} />
            </div>
          </div>
          <div>
            <div className="flex justify-center mb-8">
              <h4 className="text-center text-3xl text-white bg-blue-700 rounded-lg px-6 py-2 shadow-lg">HVERT ER FYRIRBÆRIÐ</h4>
            </div>
            <div className="grid grid-cols-2 gap-8">
              <GuessTheWord key="guessword-team1" team="team1" teamName="Gin & Nonic" onSubmit={handleSubmit} />
              <GuessTheWord key="guessword-team2" team="team2" teamName="Ace & Æiiiii" onSubmit={handleSubmit} />
            </div>
          </div>
          <div>
            <div className="flex justify-center mb-8">
              <h4 className="text-center text-3xl text-white bg-blue-700 rounded-lg px-6 py-2 shadow-lg">FIMMFALDUR</h4>
            </div>
            <div className="grid grid-cols-2 gap-8">
              <TheFiver
                key="thefiver-team1"
                team="team1"
                teamName=""
                question="Vinsælustu karlmanns eiginnöfn 2023"
                options={[
                  "Birnir",
                  "Emil",
                  "Elmar",
                  "Jón",
                  "Óliver",
                  "Aron",
                  "Viktor",
                  "Jökull",
                  "Alexander",
                  "Atlas",
                ]}
                onSubmit={handleSubmit}
              />
              <TheFiver
                key="thefiver-team2"
                team="team2"
                teamName=""
                question="Vinsælustu kvenmanns eiginnöfn 2023"
                options={[
                  "Emilía",
                  "Sara",
                  "Sóley",
                  "Embla",
                  "Aþena",
                  "Emma",
                  "Katla",
                  "Lilja",
                  "Una",
                  "Viktoría",
                ]}
                onSubmit={handleSubmit}
              />
            </div>
          </div>
          <div>
            <div className="flex justify-center mb-8">
              <h4 className="text-center text-3xl text-white bg-blue-700 rounded-lg px-6 py-2 shadow-lg">ÞRJÚ HINT</h4>
            </div>
            <div className="grid grid-cols-2 gap-8">
              <ThreeHints key="threehints-team1" team="team1" teamName="Gin & Nonic" onSubmit={handleSubmit} />
              <ThreeHints key="threehints-team2" team="team2" teamName="Ace & Æiiiii" onSubmit={handleSubmit} />
            </div>
          </div>
        </div>
      </div>
      <div className="w-1/3 h-full flex flex-col items-center justify-center p-8 bg-[#0A7A8C]">
        <div className="flex flex-col items-center mb-8">
          <Image
            src="/images/ginandnonic.jpg"
            alt="Gin & Nonic"
            width={150}
            height={150}
            className="rounded-full shadow-lg"
            priority // Add priority to this image
          />
          <h2 className="text-white text-2xl mt-4 font-semibold">Gin & Nonic</h2>
          <input
            id="team1-score"
            type="number"
            value={scores.team1}
            onChange={(e) => setScores({ ...scores, team1: +e.target.value })}
            className="mt-2 text-center text-6xl bg-transparent border-none text-white"
          />
        </div>
        <div className="flex flex-col items-center">
          <Image
            src="/images/aceandaegir.jpg"
            alt="Ace & Æiiiii"
            width={150}
            height={150}
            className="rounded-full shadow-lg"
            priority // Add priority to this image
          />
          <h2 className="text-white text-2xl mt-4 font-semibold">Ace & Æiiiii</h2>
          <input
            id="team2-score"
            type="number"
            value={scores.team2}
            onChange={(e) => setScores({ ...scores, team2: +e.target.value })}
            className="mt-2 text-center text-6xl bg-transparent border-none text-white"
          />
        </div>
        <button
          type="button"
          onClick={updateScores}
          className={`mt-8 px-6 py-3 rounded-lg font-semibold transition-colors duration-300 hover:bg-gray-300 ${isClicked ? 'bg-[#0A7A8C] text-sky-300' : 'bg-white text-[#119DBF]'}`}
        >
          Update Scores
        </button>
      </div>
    </div>
  );
};

export default ControlPanel;