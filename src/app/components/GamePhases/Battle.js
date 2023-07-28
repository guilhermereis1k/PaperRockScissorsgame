import styles from "./Battle.module.css";
import Weapon from "./Weapon";
import { useEffect, useState } from "react";

const Battle = (props) => {
  const [playerWon, setPlayerWon] = useState(false);
  const [computerWon, setComputerWon] = useState(false);
  const [hasBattled, setHasBattled] = useState(false);
  const [matchResult, setMatchResult] = useState("Draw");

  const changePhase = () => {
    props.identifyPhase(1);
  };

  useEffect(() => {
    if (props.playerWeapon === "Rock") {
      switch (props.computerWeapon) {
        case "Rock":
          console.log("draw");
          break;
        case "Scissors":
          setHasBattled(true);
          setPlayerWon(true);
          setComputerWon(false);
          setMatchResult("Player 1 wins");
          break;
        case "Paper":
          setHasBattled(true);
          setPlayerWon(false);
          setComputerWon(true);
          setMatchResult("Computer wins");
          break;
      }
    }

    if (props.playerWeapon === "Scissors") {
      switch (props.computerWeapon) {
        case "Scissors":
          console.log("draw");
          break;
        case "Paper":
          setHasBattled(true);
          setPlayerWon(true);
          setComputerWon(false);
          setMatchResult("Player 1 wins");
          break;
        case "Rock":
          setHasBattled(true);
          setPlayerWon(false);
          setComputerWon(true);
          setMatchResult("Computer wins");
          break;
      }
    }

    if (props.playerWeapon === "Paper") {
      switch (props.computerWeapon) {
        case "Paper":
          console.log("draw");
          break;
        case "Rock":
          setHasBattled(true);
          setPlayerWon(true);
          setComputerWon(false);
          setMatchResult("Player 1 wins");
          break;
        case "Scissors":
          setHasBattled(true);
          setPlayerWon(false);
          setComputerWon(true);
          setMatchResult("Computer wins");
          break;
      }
    }
  }, [hasBattled]);

  let gameResultPlayer;
  let gameResultComputer;

  useEffect(() => {
    if (hasBattled === true && playerWon === true) {
      gameResultPlayer = "win";
      props.setPlayerScore(props.playerScore + 1);
    }

    if (hasBattled === true && playerWon === false) {
      gameResultPlayer = "lose";
    }

    if (hasBattled === true && computerWon === true) {
      gameResultComputer = "win";
      props.setPlayerScore(0);
    }

    if (hasBattled === true && computerWon === false) {
      gameResultComputer = "lose";
    }
  }, [hasBattled]);

  return (
    <main className={styles.battle}>
      <h1>Battle</h1>
      <div className={styles["battle__content"]}>
        <div className={styles["battle__box"]}>
          <h3 className={styles["battle__player"]}>Player 1</h3>
          <Weapon fill={gameResultPlayer} text={props.playerWeapon} />
        </div>
        <div className={styles["battle__result"]}>
          <h2>{matchResult}</h2>
          <div className={styles["battle__score"]}>
            <h2>Score:</h2>
            <p>{props.playerScore}</p>
          </div>
          <button onClick={changePhase}>Play again</button>
        </div>
        <div className={styles["battle__box"]}>
          <h3 className={styles["battle__player"]}>Computer</h3>
          <Weapon fill={gameResultComputer} text={props.computerWeapon} />
        </div>
      </div>
    </main>
  );
};

export default Battle;
