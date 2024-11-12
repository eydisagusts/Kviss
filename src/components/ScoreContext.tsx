import { createContext, useContext, useState, useEffect, type ReactNode } from "react";
import io from "socket.io-client";

export interface Scores {
  team1: number;
  team2: number;
}

interface ScoreContextProps {
  scores: Scores;
  setScores: (scores: Scores) => void;
}

const ScoreContext = createContext<ScoreContextProps | undefined>(undefined);

const socket = io("http://localhost:4000"); // Ensure this URL is correct

export const ScoreProvider = ({ children }: { children: ReactNode }) => {
  const [scores, setScores] = useState<Scores>({ team1: 0, team2: 0 });

  useEffect(() => {
    socket.on("scoresUpdated", (newScores: Scores) => {
      setScores(newScores);
    });

    return () => {
      socket.off("scoresUpdated");
    };
  }, []);

  return (
    <ScoreContext.Provider value={{ scores, setScores }}>
      {children}
    </ScoreContext.Provider>
  );
};

export const useScores = () => {
  const context = useContext(ScoreContext);
  if (!context) {
    throw new Error("useScores must be used within a ScoreProvider");
  }
  return context;
};