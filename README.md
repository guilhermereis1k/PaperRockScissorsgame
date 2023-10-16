## Paper Rock Scissors game

This project is a paper rock scissors game made in ReactJS, I've design the interface using a minimalist style with the use of conditional styling and some animations. The project is organized in a main component that loads the game phases (as you can see in the project files) depending in which phase the game is, the majority of states are set in this main component that also pass the states through props. Along with the phases components, there's a reusable component called Weapon, this component render the SVG file and the text corresponding to which weapon is and change it's fill depending on the result of the battle. There are a lot of logic in some components, which I moved to a custom hook called useBattle, this custom hook will be called in the Battle phase and will decide who's the winner or if it's a draw. 

Link: https://guilhermereis1k.github.io/PaperRockScissorsgame/

Pages:

START

![1](https://github.com/guilhermereis1k/PaperRockScissorsgame/assets/102367663/f0e92d10-b5e8-4b8d-9f81-639fa710d6b2)


CHOOSING WEAPON

![2](https://github.com/guilhermereis1k/PaperRockScissorsgame/assets/102367663/73152303-dc09-4a1a-bfbd-f2a22623ad2f)


WAIT FOR COMPUTER CHOOSING

![3](https://github.com/guilhermereis1k/PaperRockScissorsgame/assets/102367663/2230c1fa-a582-4cad-b6b8-774da36ab9bb)


BATTLE FINAL RESULT

![4](https://github.com/guilhermereis1k/PaperRockScissorsgame/assets/102367663/6127ebca-6c41-4904-83e0-cc0b4015bb5d)
