//First Program
console.log("Hello World");

//Variables
let car = "BMW";
console.log(car); //OUTPUT : BMW
car = "Honda"; //Change the value of car
console.log(car); //OUTPUT : Honda

//Difference Between let and const
const dogName = "Fluffy"; //const use to set the value to not changeble or initialize
// dogName = "Chocolate"; //this throws an error because we change the value of the variable dogName
console.log(dogName); //OUTPUT : error
//To solve this dont initialize the dogName when you use const. Instead use let if you want to initialize the value

//Primitive Types
let name = "Jasper"; //String Literal
let age = 20; // Number Literal
let isTall = true; //Boolean Literal
let firstName = undefined;
let selectedColor = null;

//Dynamic Typing
/*
    Try this in the browsers Console

    We can check the primitive type by typing in the browsers console keyword
    "typeof" follow by variable

    Example: 
    typeof name; OUTPUT : variable

    We can change the primitive type of the variable then try to use the "typeof" again

    Example:
    typeof name; OUTPUT : variable
    name = 123; //Changes the primitive type to number
    typeof name; OUTPUT : number
*/

/* 
    Primitive Types 
    -> String = "Jasper Macaraeg" | "A"
    -> Numbers = 123 | 1.245
    -> Boolean = true | false
    -> undefined = undefined
    -> null = NO VALUE

    Reference Types
    -> Objects
    -> Array
    -> Function
*/

//Objects

//card is the object
let card = {
  //name and cardColor are the properties of the object named "card" above
  //To create a property of object. do -> variableName: value. Then follow , if you want to add another proper ty
  name: "Mirror Force",
  cardColor: "Purple",
};

//Dot Notation
card.name = "Monster Reborn";

//Bracket Notation
let selection = "name";
card[selection] = "Penguin Soldier";

console.log(card); //OUTPUT : {name: 'Penguin Soldier', cardColor: 'Purple'}

//Arrays
let listOfColors = ["red", "blue", "yellow", "green"];
//I initialize the first element of array which will starts to 0 index position
listOfColors[0] = "orange";
//I initialize also the third element of array which is the "yellow" word from the listOfColors array
listOfColors[2] = 1.25;
//Prints the list elements
console.log(listOfColors); //OUTPUT : (4) ['orange', 'blue', 1.25, 'green']
//Prints the new value of elements
console.log(listOfColors[0]); //OUTPUT : orange
console.log(listOfColors[2]); //OUTPUT : 1.25
//Returns the number of elements inside array using "length" keyword
console.log(listOfColors.length); //OUTPUT : 4

//Functions
function sayHelloJasper() {
  console.log("Hello Jasper :D");
}

//The summoner and favoriteChampion called the parameters. We use parameters to set some values from the function as we called it
function welcomeToLeagueOfLegends(summoner, favoriteChampion) {
  let voiceLine =
    "Welcome to the League of Legends " +
    summoner +
    "!" +
    " Your favorite champion is " +
    favoriteChampion;
  console.log(voiceLine);
}

//Calls the functions
sayHelloJasper();
//The function inside the parenthesis are called arguments in which we set the value from the function to set value if we called the function
welcomeToLeagueOfLegends("Jasper", "Zoe");

//Function using return which returns a value from the function
function AddTwoNumbers(firstNumber, secondNumber) {
  //We use return to get the value after we called the function. Like below it will return the sum of first and second number
  return firstNumber + secondNumber;
}

let sum = AddTwoNumbers(5, 13.234);
console.log(sum);
