import styles from "./ChooseWeapon.module.css";
import Weapon from "./Weapon";

const ChooseWeapon = (props) => {
  const chooseSelectedWeaponScissors = () => {
    props.chooseWeapon("Scissors");
    props.identifyPhase(2);
  };

  const chooseSelectedWeaponPaper = () => {
    props.chooseWeapon("Paper");
    props.identifyPhase(2);
  };

  const chooseSelectedWeaponRock = () => {
    props.chooseWeapon("Rock");
    props.identifyPhase(2);
  };

  return (
    <div className={styles.selection}>
      <div onClick={chooseSelectedWeaponScissors}>
        <Weapon text={"Scissors"} onClick={chooseSelectedWeaponScissors} />
      </div>
      <div onClick={chooseSelectedWeaponRock}>
        <Weapon text={"Rock"} />
      </div>
      <div onClick={chooseSelectedWeaponPaper}>
        <Weapon text={"Paper"} />
      </div>
    </div>
  );
};

export default ChooseWeapon;
