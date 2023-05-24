console.log("Hello World")
//usually up here are libraries

// ##programming concept to keep in mind - set your data first, define variables, create arrays, etc... and/or store data to a variable

var jokes = [] // Initialize variable 'jokes'
// to store the string in an array, the syntax is 'variable name [array position/number/index]'
jokes[0] = "If you spell Chuck Norris in Scrabble, you win."
jokes[1] = "Forever."
jokes[2] = "Chuck Norris has a mug of nails instead of coffee in the morning."
jokes[3] = "Chuck Norris does not sleep."
jokes[4] = "Chuck waits."

//functions will now consider the data of this variable rather than the first one
// defined the array to be streamlined
var jokes = [
    "It’s gonna be legen – wait for it, and I hope you’re not lactose intolerant because the second half of that word is… dairy!",
    "Can I have your phone number? It’s for the bride.",
    "The question is, do these strategies ever not work for me? Either way, the answer's about half the time.",
    "You don't bring a date to a wedding. That's like taking a deer carcass on a hunting trip.",
    "There are so many things to do with the human mouth. Why waste it on talking?"
] // array numbers are automatically assigned

//define function
var randomNumZtoOne = Math.random()
console.log(randomNumZtoOne)

var randomNumZtoArrayLength = randomNumZtoOne * jokes.length
console.log(randomNumZtoArrayLength)

var randomInteger = Math.floor(randomNumZtoArrayLength)
console.log(randomInteger)

var randomJoke = jokes[randomInteger]
console.log(randomJoke)

document.getElementById("joke-paragraph").innerText = randomJoke // allows connection of JS to frontend