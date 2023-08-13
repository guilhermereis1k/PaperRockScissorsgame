## Paper Rock Scissors game

This project is a paper rock scissors game made in ReactJS, I've design the interface using a minimalist style with the use of conditional styling and some animations. The application is organized in a main component that loads the game phases (as you can see in the project files) depending in which phase the game is, the majority of states are set in this main component that also pass the states through props. Along with the phases components, there's a reusable component called Weapon, this component render the SVG file and the text corresponding to which weapon is and change it's fill depending on the result of the battle. There are a lot of logic in some components, which I moved to a custom hook called useBattle, this custom hook will be called in the Battle phase and will decide who's the winner or if it's a draw. 

Link: https://guilhermereis1k.github.io/PaperRockScissorsgame/

Pages:

(SOON)
