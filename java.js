"use script";

alert("I'm JavaScript!"); //Q0

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

let a = 2; //Q6
let x = 1 + (a *= 2);