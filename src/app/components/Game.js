"use client";
import ChooseWeapon from "./GamePhases/ChooseWeapon";
import Start from "./GamePhases/Start";
import ComputerChoosing from "./GamePhases/ComputerChoosing";
import Battle from "./GamePhases/Battle";
import { Fragment, useEffect, useState } from "react";

const Game = (props) => {
  const [gamePhase, setGamePhase] = useState(0);

  const [playerOneWeapon, setPlayerOneWeapon] = useState("");
  const [pcWeapon, setPcWeapon] = useState("");
  const [playerScore, setPlayerScore] = useState(0);

  const addPlayerWeapon = (weapon) => {
    setPlayerOneWeapon(weapon);
  };

  const addComputerWeapon = (weapon) => {
    setPcWeapon(weapon);
  };

  let actualPhase = <Start identifyPhase={setGamePhase} />;

  switch (gamePhase) {
    case 0:
      actualPhase = <Start identifyPhase={setGamePhase} />;
      break;
    case 1:
      actualPhase = (
        <ChooseWeapon
          identifyPhase={setGamePhase}
          chooseWeapon={addPlayerWeapon}
        />
      );
      break;
    case 2:
      actualPhase = (
        <ComputerChoosing
          identifyPhase={setGamePhase}
          chooseWeapon={addComputerWeapon}
        />
      );
      break;
    case 3:
      actualPhase = (
        <Battle
          playerScore={playerScore}
          setPlayerScore={setPlayerScore}
          identifyPhase={setGamePhase}
          playerWeapon={playerOneWeapon}
          computerWeapon={pcWeapon}
        />
      );
      break;
  }

  return <Fragment>{actualPhase}</Fragment>;
};

export default Game;
