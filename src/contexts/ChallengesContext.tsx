import { createContext, useState, ReactNode, useEffect } from 'react';
import challenges from '../../challenges.json';

interface Challenge {
  type: 'body' | 'eye';
  description: string;
  amount: number;
}
interface ChallengesContextData {
  level: number;
  currentExperience: number;
  experienceToNextLevel: number;
  challengesCompleted: number;
  activeChallenge: Challenge;
  levelUp: () => void;
  startNewChallange: () => void;
  resetChallenge: () => void;
  completedChallenge: () => void;
}

interface ChallagesProviderProps {
  children: ReactNode;
}

export const ChallengesContext = createContext({} as ChallengesContextData);

export function ChallagesProvider({ children }) {
  const [level, setLevel] = useState(1);
  const [currentExperience, setCurrentExperience] = useState(0);
  const [challengesCompleted, setChallengesCompleted] = useState(0);
  const [activeChallenge, setActiveChallenge] = useState(null);


  const experienceToNextLevel = Math.pow((level + 1) * 4, 2)


  useEffect(()=> {
    Notification.requestPermission();
  }, [])

  function levelUp() {
    setLevel(level + 1);
  }

  function startNewChallange() {
    const randomChallengeIndex = Math.floor(Math.random() * challenges.length);
    const challenge = challenges[randomChallengeIndex];
        
    setActiveChallenge(challenge)

    new Audio ('/notification.mp3').play();

    if (Notification.permission === 'granted') {
      new Notification('Novo Desafio 🎉', {
        body: 'Valendo xp!' 
      })
    }

  }

  function resetChallenge() {
    setActiveChallenge(null);
  }

  function completedChallenge(){
    if(
      !activeChallenge) {
        return;
      }
    const {amount} = activeChallenge;

      let finalExperience = currentExperience + amount;
      // let it change

      if(finalExperience>= experienceToNextLevel){
        finalExperience= finalExperience - experienceToNextLevel;
        levelUp();
      }

    setCurrentExperience(finalExperience);
    setActiveChallenge(null);
    setChallengesCompleted(challengesCompleted + 1);
  }


  return (
    <ChallengesContext.Provider
      value={{
        level,
        currentExperience,
        experienceToNextLevel,
        challengesCompleted,
        activeChallenge,
        levelUp,
        startNewChallange,
        resetChallenge,
        completedChallenge,
      }}
    >
      { children }
    </ChallengesContext.Provider>
  );
}
