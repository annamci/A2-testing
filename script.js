/* So i dont need to go through all the other code to get 
my answer */

let Name = "John", admin = Name; //Q1
alert(admin);

let Nameofourplant = "Earth"; //Q2
let Nameofcurrentvisitor = "John";

let name = "Ilya"; //Q3
alert( `hello ${1}` ); // hello 1
alert( `hello ${"name"}` ); // hello name
alert( `hello ${Name}` ); // hello John

let Name1 = prompt("What is your name", ""); //Q4
alert(Name1);

let a = 1, b = 1; // Q5
let c = ++a; 
let d = b++; 
alert(a); //2
alert(b); //2
alert(c); //2
alert(d); //1

let A = 2; //Q6
let x = 1 + (A *= 2);
alert(A); // 4
alert(x); // 5

//Q7
"" + 1 + 0 //=10 
"" - 1 + 0 // =-1 
true + false //=1
6 / "3" //=2
"2" * "3" //=6
4 + 5 + "px" //"9px"
"$" + 4 + 5 //"$45"
"4" - 2 //=2
"4px" - 2 //=Nan
"  -9  " + 5 //="-9 5"
"  -9  " - 5 //=-14
null + 1 //=1 
undefined + 1 //NaN
" \t \n" - 2 //-2

let aa = +prompt("First number?", 1); //Q8
let bb = +prompt("Second number?", 2);
alert(aa + bb); // 3

//Q9
5 > 4 // true
"apple" > "pineapple" // false 
"2" > "12" // true
undefined == null // true
undefined === null // false
null == "\n0\n" // false
null === +"\n0\n" // false

//Q10 --> yes
if ("0") {
alert( 'Hello' );
}

//Q11
let message = prompt("What is the official name of JavaScript?", "");
if (message == "ECMAScript") {
    alert("Right!");
} else {
    alert("You don't know?");
}

//Q12
let value = prompt("Write a random number", "");
if (value>0){
    alert(1);
} else if (value<0) {
    alert(-1);
} else if (value==0) {
    alert(0);
}

//Q13
let result = (a + b < 4) ? "Below" : "Over";

//Q14
/*Rewrite if..else using multiple ternary operators '?'.
For readability, it's recommended to split the code into multiple lines.*/

let login = prompt("What is your login?", "");

let Message = (login == "Employee") ? "Hello":
(login=="Director") ? "Greetings":
(login=="No login") ? "":
"";

alert(Message);

//Q15
alert( null || 2 || undefined ); //2

//Q16
alert( alert(1) || 2 || alert(3) ); //1 and then 2

//Q17
alert( 1 && null && 2 ); //null


//Q18
alert( alert(1) && alert(2) ); //1 and then undefined

//Q19
alert( null || 2 && 3 || 4 ); // 3


//Q20
if (age = prompt("What is your age?", ""));
if (age>=14 && age<=90) {
    alert("Inclusively")
}

//Q21
if (age = prompt("What is your age?", ""));
if (age<14 && age>90) {
    alert("NOT!");
} else {
    alert("");
}

//Q22
if (-1 || 0) alert( 'first' ); // 0
if (-1 && 0) alert( 'second' ); // -
if (null || -1 && 1) alert( 'third' ); 1
