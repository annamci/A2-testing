"use script";

//Q0 Create a web page and external JavaScript file to show the message "I'm JavaScript!". Open the page, ensure that the alert works.
alert("I'm JavaScript!");

//Q1 Declare two variables: admin and name, Assign the value "John" to name, Copy the value from name to admin, Show the value of admin using alert (must output "John").
let Admin, Name;
Name = "John";
Admin = Name;
alert( Admin ); // "John"

//Q2 Create a variable with the name of our planet. How would you name such a variable? Create a variable to store the name of a current visitor to a website. How would you name that variable?
let Nameofourplant = "Earth";
let Nameofcurrentvisitor = "John";

//Q3 What is the output of the script?
let Name1 = "Ilya";
alert( `hello ${1}` ); // hello1
alert( `hello ${"Name"}` ); // hello Name
alert( `hello ${Name1}` ); // hello Ilya

//Q4 Create a web-page that asks for a name and outputs it.
let Name2 = prompt("What is your name?","");
alert( Name2 );

//Q5 What are the final values of all variables a, b, c and d after the code below?
let a = 1, b = 1;
let c = ++a;  
let d = b++;  

alert( c ); // 2
alert( d ); // 1
alert( a ); // 2
alert( b ); // 2

//Q6 What are the values of a and x after the code below?
let A = 2;
let x = 1 + (a *= 2); 
alert( a ); // 4
alert( x ); // 5

//Q7 What are results of these expressions? **
"" + 1 + 0 
"" - 1 + 0 
true + false 
6 / "3"
"2" * "3"
4 + 5 + "px"
"$" + 4 + 5
"4" - 2
"4px" - 2
"  -9  " + 5
"  -9  " - 5
null + 1
undefined + 1
" \t \n" - 2

//Q8 Here is some code that asks the user for two numbers and shows their sum. It works incorrectly. The output in the example below is 12 (for default prompt values). Why? Fix it. The result should be 3.
let AA = prompt("First number?", 1);
let BB = prompt("Second number?", 2);
alert(a + b); // 12

//Q9 What will be the result for these expressions?
5 > 4 --> true
"apple" > "pineapple"
"2" > "12"
undefined == null
undefined === null
null == "\n0\n"
null === +"\n0\n"

//