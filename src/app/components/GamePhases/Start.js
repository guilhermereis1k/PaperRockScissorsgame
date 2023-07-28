import styles from "./Start.module.css";
import SvgAll from "../../img/All";

const Start = (props) => {
  const changePhase = () => {
    props.identifyPhase(1);
  };

  return (
    <main className={styles.start}>
      <div className={styles["start__text"]}>
        <h1>Welcome to the Paper Rock Scissors game</h1>
        <button onClick={changePhase} className={styles["start__button"]}>
          Start now
        </button>
      </div>
      <SvgAll />
    </main>
  );
};

export default Start;
