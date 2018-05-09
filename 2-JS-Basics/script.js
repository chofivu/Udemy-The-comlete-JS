/*
// lecture: variables
var name = 'James';
console.log(name);

var lastName = 'Bond';
console.log(lastName);

var age = 37;
console.log(age);

var fullAge = true;
console.log(fullAge);
*/



/*
// lecture: variables 2
var name = 'James';
var age = 37;

//console.log(name + age);
//console.log(age + age);

var job, isMarried;

//console.log(job);

job = 'spy';
isMarried = false;

console.log(name + ' is a ' + age + ' years old ' + job + '. Is he married? ' + isMarried + '.');

age = 'thirty seven';
job = 'driver';

console.log(name + ' is a ' + age + ' years old ' + job + '. Is he married? ' + isMarried + '.');

//var lastName = prompt('What is the last name?');
//console.log(lastName);

alert(name + ' is a ' + age + ' years old ' + job + '. Is he married? ' + isMarried + '.');
*/



/*
// lecture: operators
var now = 2018;
var birthYear = now - 37

birthYear = now - 37 * 2;

console.log(birthYear);

var ageJohn = 30;
var ageMark = 38;

ageJohn = ageMark = (3 + 5) * 4 - 6;

ageJohn++;
ageMark *= 2;

console.log(ageJohn);
console.log(ageMark);
*/

/*
/////////////////////////////////////////
// lecture: if/else statements

var name = 'James';
var age = 37;
var isMarried = 'yes';

if (isMarried === 'yes'){
    console.log(name + ' is married!');
} else {
    console.log(name + ' will hopefully marry son :)');
}

isMarried = false;


if(isMarried) {
    console.log('YES');
} else {
    console.log('NO');
}


if(isMarried) {
    console.log('YES');
}

if (23 ==="23"){
    console.log('Something to print...')
}
*/

/*
/////////////////////////////////////////////////////////
// lecture: boolean logic and switch

var age = 20;

if (age < 20){
    console.log('James is a teenager.');
} else if (age >= 20 && age < 30) {
    console.log('James is a young man');
} else {
    console.log('James is a man.');
}




var job = 'teacher';

job = prompt('What does James do?')

switch(job) {
    case 'teacher':
        console.log('James teaches kids.');
        break;
    case 'driver':
        console.log('James drives a cab.');
        break;
    case 'cop':
        console.log('James fight crime.');
        break;
    default:
    console.log('James does something else.');
}
*/



///////////////////////////////////////////////////////
// CODING CHALLENGE 1

/*
John and friend invented a simple game where
the two player with the highest value od his 
height (in centimeters) plus five times his
age wins (what a silly game)

1. Create variables for the heights and ages 
of two friends and assign them some values
2. Calculate their scores
3. Decide who wins and print the winner to the 
console. Include the score in the string that 
there can be draw. (both player with the same score)

4. EXTRA: Add a third player and now decide who wins.
   (Hint:ypu will need the && operator to take the decision)
*/


//SOLUTION:
/*
var player1age = 19;
var player1height = 155;
var player2age = 25;
var player2height = 188;

var scorePlayer1 = player1height + 5 * player1age;
var scorePlayer2 = player2height + 5 * player2age;


if (scorePlayer1 > scorePlayer2){
    console.log('Player1 is a winner with ' + scorePlayer1 + ' points!')
} else if (scorePlayer2 > scorePlayer1) {
    console.log('Player2 is a winner with ' + scorePlayer2 + ' points!');
} else {
    console.log('It is a draw!');
}


var player3age = 30;
var player3height = 173;
var scorePlayer3 = player3height + 5 * player3age;

if (scorePlayer1 > scorePlayer2 && scorePlayer1 > scorePlayer3){
    console.log('Player1 is a winner with ' + scorePlayer1 + ' points!');
} else if (scorePlayer2 > scorePlayer1 && scorePlayer2 > scorePlayer3){
    console.log('Player2 is a winner with ' + scorePlayer2 + ' points!');
} else if (scorePlayer3 > scorePlayer1 && scorePlayer3 > scorePlayer2){
    console.log('Player3 is a winner with ' + scorePlayer3 + ' points');
} else {
    console.log('It\'s a draw!');
}
*/

/*
///////////////////////////////////////////////////////
// lecture : Functions

function calculateAge(yearOfBirth){
    var age = 2018 - yearOfBirth;
    return age;
}

var ageJohn = calculateAge(1990);
var ageMike = calculateAge(1993);
var ageMarly = calculateAge(2003);



function yearsUntilRetirement(name, year){
    var age = calculateAge(year);
    var retirement = 65 - age;

    if (retirement >= 0){
        console.log(name + ' retires in ' + retirement + ' years.');
    } else {
    console.log(name + ' has alrady retired.');
    }
}


yearsUntilRetirement('John', 1990);
yearsUntilRetirement('Mike', 1956);
yearsUntilRetirement('Marly', 1555);
*/


////////////////////////////////////////////////////////////
// lecture: Statements and expressions

function someFun(par) {
    //code
}

var someFun = function(par) {
    //code
}

//Expressions
3 + 4;
var x = 3;

//Statements
if (x === 5){
    //do something
}




