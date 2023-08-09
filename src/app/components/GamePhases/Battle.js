import { useEffect } from "react";
import styles from "./Battle.module.css";
import Weapon from "./Weapon";
import useBattle from "../../hooks/use-battle";

const Battle = (props) => {
  const changePhase = () => {
    props.identifyPhase(1);
  };

  const { matchResultText, defineWinner: calculateResult } = useBattle(
    props.playerScore,
    props.setPlayerScore
  );

  useEffect(() => {
    calculateResult(props.playerWeapon, props.computerWeapon, getResults);
  }, []);

  const getResults = (data) => {
    console.log(data);
  };

  return (
    <main className={styles.battle}>
      <h1>Battle</h1>
      <div className={styles["battle__content"]}>
        <div className={styles["battle__box"]}>
          <h3 className={styles["battle__player"]}>Player 1</h3>
          <Weapon
            fill={matchResultText == "Player 1 wins" ? "win" : "lose"}
            text={props.playerWeapon}
          />
        </div>
        <div className={styles["battle__result"]}>
          <h2>{matchResultText}</h2>
          <div className={styles["battle__score"]}>
            <h2>Score:</h2>
            <p>{props.playerScore}</p>
          </div>
          <button onClick={changePhase}>Play again</button>
        </div>
        <div className={styles["battle__box"]}>
          <h3 className={styles["battle__player"]}>Computer</h3>
          <Weapon
            fill={matchResultText == "Computer wins" ? "win" : "lose"}
            text={props.computerWeapon}
          />
        </div>
      </div>
    </main>
  );
};

export default Battle;
