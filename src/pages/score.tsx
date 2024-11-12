import { useScores } from "../components/ScoreContext";
import Image from "next/image";

const ScoreDisplay = () => {
  const { scores } = useScores();

  return (
    <div className="w-full h-screen flex flex-col items-center justify-center bg-gradient-to-r from-blue-500 to-teal-500">
      <h1 className="absolute top-10 text-white text-5xl font-bold drop-shadow-lg">Bústaða Kviss!</h1>
      <div className="flex w-full justify-between px-60 mt-20">
        <div className="flex flex-col items-center">
          <Image src="/images/ginandnonic.jpg" alt="Team 1" width={250} height={250} className="rounded-full shadow-lg" priority />
          <h2 className="text-white text-3xl mt-4 font-semibold">Gin & Nonic</h2>
          <h3 className="text-white text-9xl mt-4 font-bold animate-pulse">{scores.team1}</h3>
        </div>
        <div className="flex flex-col items-center">
          <Image src="/images/aceandaegir.jpg" alt="Team 2" width={250} height={250} className="rounded-full shadow-lg" priority />
          <h2 className="text-white text-3xl mt-4 font-semibold">Ace & Æiiiii</h2>
          <h3 className="text-white text-9xl mt-4 font-bold animate-pulse">{scores.team2}</h3>
        </div>
      </div>
    </div>
  );
}

export default ScoreDisplay;