import { useEffect, useState } from "react";

const useBattle = (playerScore, setPlayerScore) => {
  const [playerWon, setPlayerWon] = useState(false);
  const [hasBattled, setHasBattled] = useState(false);
  const [matchResultText, setMatchResultText] = useState("Draw");

  useEffect(() => {
    if (hasBattled === true && playerWon === true) {
      setPlayerScore(playerScore + 1);
    }

    if (hasBattled === true && playerWon === false) {
      setPlayerScore(0);
    }
  }, [hasBattled]);

  const defineWinner = (playerWeapon, computerWeapon) => {
    if (playerWeapon === "Rock") {
      switch (computerWeapon) {
        case "Rock":
          break;
        case "Scissors":
          setHasBattled(true);
          setPlayerWon(true);
          setMatchResultText("Player 1 wins");
          break;
        case "Paper":
          setHasBattled(true);
          setPlayerWon(false);
          setMatchResultText("Computer wins");
          break;
      }
    }

    if (playerWeapon === "Scissors") {
      switch (computerWeapon) {
        case "Scissors":
          break;
        case "Paper":
          setHasBattled(true);
          setPlayerWon(true);
          setMatchResultText("Player 1 wins");
          break;
        case "Rock":
          setHasBattled(true);
          setPlayerWon(false);
          setMatchResultText("Computer wins");
          break;
      }
    }

    if (playerWeapon === "Paper") {
      switch (computerWeapon) {
        case "Paper":
          break;
        case "Rock":
          setHasBattled(true);
          setPlayerWon(true);
          setMatchResultText("Player 1 wins");
          break;
        case "Scissors":
          setHasBattled(true);
          setPlayerWon(false);
          setMatchResultText("Computer wins");
          break;
      }
    }
  };

  return {
    matchResultText,
    defineWinner,
  };
};

export default useBattle;
