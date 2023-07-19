const game = {
  team1: "Bayern Munich",
  team2: "Borrussia Dortmund",
  players: [
    [
      "Neuer",
      "Pavard",
      "Martinez",
      "Alaba",
      "Davies",
      "Kimmich",
      "Goretzka",
      "Coman",
      "Muller",
      "Gnarby",
      "Lewandowski",
    ],
    [
      "Burki",
      "Schulz",
      "Hummels",
      "Akanji",
      "Hakimi",
      "Weigl",
      "Witsel",
      "Hazard",
      "Brandt",
      "Sancho",
      "Gotze",
    ],
  ],
  score: "4:0",
  scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
  date: "Nov 9th, 2037",
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

///////////////////////////////////////
// Coding Challenge #2

/* 
Let's continue with our football betting app!

1. Loop over the game.scored array and print each player name to the console, along with the goal number (Example: "Goal 1: Lewandowski")
2. Use a loop to calculate the average odd and log it to the console (We already studied how to calculate averages, you can go check if you don't remember)
3. Print the 3 odds to the console, but in a nice formatted way, exaclty like this:
      Odd of victory Bayern Munich: 1.33
      Odd of draw: 3.25
      Odd of victory Borrussia Dortmund: 6.5
Get the team names directly from the game object, don't hardcode them (except for "draw"). HINT: Note how the odds and the game objects have the same property names 😉

BONUS: Create an object called 'scorers' which contains the names of the players who scored as properties, and the number of goals as the value. In this game, it will look like this:
      {
        Gnarby: 1,
        Hummels: 1,
        Lewandowski: 2
      }

GOOD LUCK 😀
*/
/*
const scorers = {};
for (let player of game.scored) {
  scorers[player] ? scorers[player]++ : (scorers[player] = 1);
}
console.log(scorers);

// 1:-
console.log(`---1---`);
for (let [goal, player] of game.scored.entries()) {
  console.log(`Goal ${goal + 1}: ${player}`);
}

// 2:-
console.log(`---2---`);
let sum = 0;
console.log(Object.values(game.odds));
for (let odd of Object.values(game.odds)) {
  sum = sum + odd;
}

console.log(sum / Object.values(game.odds).length);

// 3:-
console.log(`---3---`);
// let names = Object.keys(game.odds)
// let scores = Object.values(game.odds)
// let [team1,,team2] = names
// let [s1,d,s2] = scores

// console.log(`Odd of victory ${game[team1]}: ${s1}`)
// console.log(`Odd of draw: ${d}`)
// console.log(`Odd of victory ${game[team2]}: ${s2}`)

for (let [team, score] of Object.entries(game.odds)) {
  console.log(
    `Odd of ${(team === "x" ? "draw" : "victory", game[team])}:- ${score}`
  );
}

*/

///////////////////////////////////////
// Coding Challenge #1

/* 
We're building a football betting app (soccer for my American friends 😅)!

Suppose we get data from a web service about a certain game (below). In this challenge we're gonna work with the data. So here are your tasks:

1. Create one player array for each team (variables 'players1' and 'players2')
2. The first player in any player array is the goalkeeper and the others are field players. For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players
3. Create an array 'allPlayers' containing all players of both teams (22 players)
4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'
5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')
6. Write a function ('printGoals') that receives an arbitrary number of player names (NOT an array) and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)
7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, WITHOUT using an if/else statement or the ternary operator.

TEST DATA FOR 6: Use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'. Then, call the function again with players from game.scored

GOOD LUCK 😀
*/

/*
console.log(game);
// 1:-

// let players1 = game.players[0];
// let players2 = game.players[1];

let [players1, players2] = game.players;
console.log(players1, players2);

// 2:-
// let gk1 = players1[0];
// let fieldPlayers1 = players1;
// fieldPlayers1.shift();
// console.log(fieldPlayers1);
// console.log(players1);

let [gk1, ...fieldPlayers1] = players1;
console.log(gk1, fieldPlayers1);

// 3:-
let allPlayers = [...players1, ...players2];
console.log(allPlayers);

// 4:-
let players1Final = [...players1, "Thiago", "Coutinho", "Perisic"];

console.log(players1Final);

// 5:-

// let { team1, x, team2 } = game.odds;

let {
  odds: { team1, team2, x: draw },
} = game;
console.log(team1, team2, draw);

// 6:-

let printGoals = function (...players) {
  console.log(`${players} has scores ${players.length} goals were scored`);
};

// printGoals(...game.scored);
// 7:-

team1 < team2 && console.log(`Team 1 is more likely to win`);
team1 > team2 && console.log(`Team 2 is more likely to win`);

*/

///////////////////////////////////////
// Coding Challenge #4

/* 
Write a program that receives a list of variable names written in underscore_case and convert them to camelCase.

The input will come from a textarea inserted into the DOM (see code below), and conversion will happen when the button is pressed.

THIS TEST DATA (pasted to textarea)
underscore_case
 first_name
Some_Variable 
  calculate_AGE
delayed_departure

SHOULD PRODUCE THIS OUTPUT (5 separate console.log outputs)
underscoreCase      ✅
firstName           ✅✅
someVariable        ✅✅✅
calculateAge        ✅✅✅✅
delayedDeparture    ✅✅✅✅✅

HINT 1: Remember which character defines a new line in the textarea 😉
HINT 2: The solution only needs to work for a variable made out of 2 words, like a_b
HINT 3: Start without worrying about the ✅. Tackle that only after you have the variable name conversion working 😉
HINT 4: This challenge is difficult on purpose, so start watching the solution in case you're stuck. Then pause and continue!

Afterwards, test with your own test data!

GOOD LUCK 😀
*/

document.body.append(document.createElement("textarea"));
document.body.append(document.createElement("button"));
let text = document.querySelector("textarea").value;

let textArea = document.querySelector("textarea");
let btn = document.querySelector("button");
btn.textContent = "Click";

btn.addEventListener("click", function () {
  let textAreaData = textArea.value.toLowerCase().split("\n");
  console.log(textAreaData);
  for (let [i, data] of textAreaData.entries()) {
    let [first, second] = data.trim().split("_");
    let final = first + second[0].toUpperCase() + second.slice(1);
    console.log(final.padEnd(20, " "), "✅".repeat(i + 1));
  }
});

///////////////////////////////////////
// String Methods Practice

const flights =
  "_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30";

// 🔴 Delayed Departure from FAO to TXL (11h25)
//              Arrival from BRU to FAO (11h45)
//   🔴 Delayed Arrival from HEL to FAO (12h05)
//            Departure from FAO to LIS (12h30)

for (let flight of flights.split("+")) {
  let final = "";
  let [s1, s2, s3, s4] = flight.split(";");
  /*
  // console.log(s1,s2,s3,s4)
  s1Final = s1.split("_").join(" ").trim();
  // console.log(s1Final);
  s2Final = s2.slice(0, 3).toUpperCase();
  // console.log(s2Final)
  s3Final = s3.slice(0, 3).toUpperCase();
  // console.log(s3Final)
  s4Final = "(" + s4.replace(":", "h") + ")";
  final = `${s1Final} from ${s2Final} to ${s3Final} ${s4Final}`
  // final = final.startsWith("Delayed") ? "🔴 " + final : final;
  // console.log(final.padStart(45, " "));
  */

  final = `${s1.startsWith("_Delayed") ? "🔴" : ""} ${s1
    .split("_")
    .join(" ")
    .trim()} from ${s2.slice(0, 3).toUpperCase()} to ${s3
    .slice(0, 3)
    .toUpperCase()} (${s4.replace(":", "h")})`.padStart(45, " ");
  console.log(final);
}

let myName = "Eswar";
myName[1] = "w";
console.log(myName);

let newStr = new String("string object");
console.log(newStr,typeof newStr)
