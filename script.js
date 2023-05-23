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

//define function
var randomNumZtoOne = Math.random()
console.log(randomNumZtoOne)

var randomNumZtoArrayLength = randomNumZtoOne * jokes.length
console.log(randomNumZtoArrayLength)

var randomInteger = Math.floor(randomNumZtoArrayLength)
console.log(randomInteger)

var randomJoke = jokes[randomInteger]
console.log(randomJoke)
