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
let c = ++a; // 
let d = b++; // 

//Q6 