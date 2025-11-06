## Instructions

_Warning: This exercise will require you to read ahead in the linked resource (below) and may challenge you ahead of the lecture content. You should read and consider the material very carefully. The exercise will also take you some time to complete._

Complete the below exercises by creating new files in this repository. You should commit your changes with an appropriate message after you complete each exercise. You should create a single `index.htm` file that includes a single `.js` file using a `<script>` tag, then answering each of the numbered questions using either code or comments in the `.js` file. Make it clear which question is which by inserting comments seperating the questions.

Many of these exercises ask you to simply interpret code and record the answer. You can test your thinking by executing the code, but you should first perform the thought exercise. Each excercise is very simple, and this practical can be completed quickly, but *ensure* that you understand each of the answers.


The questions for this practical are taken from the "Tasks" in sections 1-12 from the JavaScript Fundamentals on JavaScript.info, you can find the solution to each exercise in the various sections at https://javascript.info/first-steps, if needed.

## Questions

0. [1] Create a web page and external JavaScript file to show the message "I'm JavaScript!". Open the page, ensure that the alert works.

1. [4]
   1. Declare two variables: `admin` and `name`.
   2. Assign the value `"John"` to `name`.
   3. Copy the value from `name` to `admin`.
   4. Show the value of `admin` using `alert` (must output "John").

2. [2]
   1. Create a variable with the name of our planet. How would you name such a variable?
   2. Create a variable to store the name of a current visitor to a website. How would you name that variable?

3. [3] What is the output of the script?

    ```js
    let name = "Ilya";

    alert( `hello ${1}` ); // ?

    alert( `hello ${"name"}` ); // ?

    alert( `hello ${name}` ); // ?
    ```

4. [2] Create a web-page that asks for a name and outputs it.

5. [4] What are the final values of all variables `a`, `b`, `c` and `d` after the code below?

    ```js
    let a = 1, b = 1;

    let c = ++a; // ?
    let d = b++; // ?
    ```

6. [2] What are the values of `a` and `x` after the code below?

    ```js
    let a = 2;

    let x = 1 + (a *= 2);
    ```

7. [14] What are results of these expressions?

    ```js no-beautify
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
    ```

    Think well, write down and then compare with the answer.

8. [2] Here is some code that asks the user for two numbers and shows their sum.

    It works incorrectly. The output in the example below is `12` (for default prompt values).

    Why? Fix it. The result should be `3`.

    ```js run
    let a = prompt("First number?", 1);
    let b = prompt("Second number?", 2);

    alert(a + b); // 12
    ```

9. [7] What will be the result for these expressions?

    ```js no-beautify
    5 > 4
    "apple" > "pineapple"
    "2" > "12"
    undefined == null
    undefined === null
    null == "\n0\n"
    null === +"\n0\n"
    ```

10. [1] Will the `alert` be shown?

    ```js
    if ("0") {
    alert( 'Hello' );
    }
    ```

11. [5] Using the `if..else` construct, write the code which asks: 'What is the "official" name of JavaScript?'

    If the visitor enters "ECMAScript", then output "Right!", otherwise -- output: "You don't know? ECMAScript!"

12. [5] Using `if..else`, write the code which gets a number via `prompt` and then shows in `alert`:

    - `1`, if the value is greater than zero,
    - `-1`, if less than zero,
    - `0`, if equals zero.

    In this task we assume that the input is always a number.

13. [5] Rewrite this `if` using the conditional operator `'?'`:

    ```js
    let result;

    if (a + b < 4) {
    result = 'Below';
    } else {
    result = 'Over';
    }
    ```

14. [5] Rewrite `if..else` using multiple ternary operators `'?'`.

    For readability, it's recommended to split the code into multiple lines.

    ```js
    let message;

    if (login == 'Employee') {
    message = 'Hello';
    } else if (login == 'Director') {
    message = 'Greetings';
    } else if (login == '') {
    message = 'No login';
    } else {
    message = '';
    }
    ```

15. [3] What is the code below going to output?

    ```js
    alert( null || 2 || undefined );
    ```

16. [3] What will the code below output?

    ```js
    alert( alert(1) || 2 || alert(3) );
    ```

17. [3] What is this code going to show?

    ```js
    alert( 1 && null && 2 );
    ```

18. [3] What will this code show?

    ```js
    alert( alert(1) && alert(2) );
    ```

19. [3] What will the result be?

    ```js
    alert( null || 2 && 3 || 4 );
    ```

20. [5] Write an `if` condition to check that `age` is between `14` and `90` inclusively.

    "Inclusively" means that `age` can reach the edges `14` or `90`.

21. [5] Write an `if` condition to check that `age` is NOT between `14` and `90` inclusively.

    Create two variants: the first one using NOT `!`, the second one -- without it.

22. [3] Which of these `alert`s are going to execute?

    What will the results of the expressions be inside `if(...)`?

    ```js
    if (-1 || 0) alert( 'first' );
    if (-1 && 0) alert( 'second' );
    if (null || -1 && 1) alert( 'third' );
    ```
