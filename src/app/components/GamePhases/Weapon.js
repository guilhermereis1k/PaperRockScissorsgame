import styles from "./Weapon.module.css";
import SvgScissors from "../../img/Scissors.js";
import SvgRock from "../../img/Rock.js";
import SvgPaper from "../../img/Paper.js";

const Weapon = ({ text, choosingWeapon, fill }) => {
  console.log(fill);
  let playerSelectedWeapon = text;

  let selectedImage;

  switch (playerSelectedWeapon) {
    case "Scissors":
      selectedImage = (
        <SvgScissors
          onClick={choosingWeapon}
          className={styles["selection__images"]}
          alt={`Choose ${text.toLowerCase()} as your weapon"`}
        />
      );
      break;
    case "Rock":
      selectedImage = (
        <SvgRock
          onClick={choosingWeapon}
          className={styles["selection__images"]}
          alt={`Choose ${text.toLowerCase()} as your weapon"`}
        />
      );
      break;
    case "Paper":
      selectedImage = (
        <SvgPaper
          onClick={choosingWeapon}
          className={styles["selection__images"]}
          alt={`Choose ${text.toLowerCase()} as your weapon"`}
        />
      );
      break;
  }

  return (
    <div className={`${styles.selection__box} ${fill}`}>
      <h2>{text}</h2>
      {selectedImage}
    </div>
  );
};

export default Weapon;
