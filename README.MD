# Crystal Collector Game

[![License: WTFPL](https://img.shields.io/badge/License-WTFPL-brightgreen.svg)](http://www.wtfpl.net/about/)

[Checkout JStudio](https://jstudio-1f20c4b56dff.herokuapp.com/)

## Description
Welcome to Crystal Collector! In this engaging game, your objective is to match the given score by selecting a random crystal. Experience the thrill of testing your luck against the computer, adding an element of excitement and fun to your gaming experience. Enjoy the challenge and see if you can beat the odds in Crystal Collector!

---

![game-interface](./assets/wireframe/Screenshot%202024-02-18%20at%204.26.23 PM.png)



### Usage 

Here's how the app works:

There will be four crystals displayed as buttons on the page.

The player will be shown a random number at the start of the game.

When the player clicks on a crystal, it will add a specific amount of points to the player's total score.

Your game will hide this amount until the player clicks a crystal.
When they do click one, update the player's score counter.
The player wins if their total score matches the random number from the beginning of the game.

The player loses if their score goes above the random number.

The game restarts whenever the player wins or loses.

When the game begins again, the player should see a new random number. Also, all the crystals will have four new hidden values. Of course, the user's score (and score counter) will reset to zero.
The app should show the number of games the player wins and loses. To that end, do not refresh the page as a means to restart the game.