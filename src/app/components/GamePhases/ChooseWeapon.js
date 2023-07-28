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
      <Weapon text={"Scissors"} choosingWeapon={chooseSelectedWeaponScissors} />
      <Weapon text={"Rock"} choosingWeapon={chooseSelectedWeaponRock} />
      <Weapon text={"Paper"} choosingWeapon={chooseSelectedWeaponPaper} />
    </div>
  );
};

export default ChooseWeapon;
