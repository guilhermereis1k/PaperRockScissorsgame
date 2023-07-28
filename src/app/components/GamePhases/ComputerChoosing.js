import styles from "./ComputerChoosing.module.css";
import { useEffect } from "react";

const ComputerChoosing = (props) => {
  const generateRandomComputerWeapon = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      const weaponNumber = generateRandomComputerWeapon(1, 3);
      switch (weaponNumber) {
        case 1:
          props.identifyPhase(3);
          props.chooseWeapon("Scissors");
          break;
        case 2:
          props.identifyPhase(3);
          props.chooseWeapon("Paper");
          break;

        case 3:
          props.identifyPhase(3);
          props.chooseWeapon("Rock");
          break;
      }
    }, 3500);
  }, []);

  return (
    <div className={styles.main}>
      <h1 className={styles.loading}>Computer choosing</h1>
    </div>
  );
};

export default ComputerChoosing;
