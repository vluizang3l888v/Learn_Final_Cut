//notes for myself
// nothing is linked, this is just a notes file.

const PETS = ["Dog", "Cat", "Danger"];

// cannot change. 

// can't change PETS. 


// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


// use 'let' to declare variables which will change
let time = 10;

// this is fine
time = 12;
console.log(time)


// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// this below would throw an error. 
let answer = 42

let answer = 7 * 6;
// this above would throw an error. 



//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//var does not care. 
var answer = 1;
var answer = 2;
//var does not care.



//* Remember, both `const` and `let` are block scoped.
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// What is the \n
alert("That's a lot of tacos, " + classmate + ".\nTaco 'Bout Hungry!");
// the \n breaks the line. 
// like go to next line. 


//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

button.innerHTML = `How many tacos did ${classmate} eat?`;
// learn back tic purpose. 
// will need back tic for Final Cut project. 



//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++



const houses = ["home1", "home2", "home3"];
// const will never change. 
// you can add to the array, but houses will never change. 
// const is like constant it never changes. 

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++




// for more info look at the game-of-strings.js file. 
var getLoser = function(move) {
    if (move.text.indexOf("House Targaryen") === 0) {
      // Fire and Blood.
      return move.defender;
    }
// Ben explained this. 
// Read about this later. 
// check the repo. 
// for more info look for the game-of-strings.js file in the repo. 
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


// Look into Template Literals. 
// Template literals are enclosed by the back-tick(` `)character instead of double or single quotes. 
// Template literals can contain placeholders. These are indicated by the dollar sign and curly braces (${expression}).


//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// look at array..
// look at filter. 
// filter will seek only M names not anything else. 
// mNames has been created. 

const princesses = [{ name: "Rapunzel", age: 18 }, { name: "Mulan", age: 16 },
  { name: "Anna", age: 18 }, { name: "Moana", age: 16 }];

  // using the `names` array, get only those names that start with an 'M'
// can be replaced with filter
const mNames = [];
for (let i = 0; i < names.length; i++) {
  if (names[i].startsWith("M")) {
    mNames.push(names[i]);
  }
}
console.log("m-names: ", mNames);


//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


// look up React. 






























