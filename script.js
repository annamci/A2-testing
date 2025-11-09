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

