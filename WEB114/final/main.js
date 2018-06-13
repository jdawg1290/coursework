/*
    WEB 114 Final Project
    Author: Jeremiah Cooley
    File: main.js
    Date: 05 - 02 - 2017
*/

"use strict"; //strict mode

// general global variables
var user; //var // stores user name
var widget; // current widget
var lastWidget; // last widget
var i; // declaring a var in a for statement makes it global so why pretend?
var startValue; // initial compound value
var workspace = document.getElementById("workspace"); // handle for workspace div
var solution = document.getElementById("solution"); // handle for solution p

//quiz variables
var quizScore;
var quizNumQuestions;
var question;
var quizDiv;
var numSolved;
var quizQuestions = []; //array
var quizAnswers = [];
var quizSolutions = [];
var quizSolutionExplain = [];
var quizSolved = [];

// function to initialize the quiz widget
function quizSetup() {
    quizScore = 0;
    quizNumQuestions = 10;
    numSolved = 0;

    quizQuestions[0] = "Select all comparison operators.";
    quizQuestions[1] = "Select the decrement operator.";
    quizQuestions[2] = "Select the logical AND operator.";
    quizQuestions[3] = "Select the expression that uses the unary negation operator.";
    quizQuestions[4] = "Select the logical OR operator.";
    quizQuestions[5] = "What loop structure would you use if you wanted a fixed number of iterations with a counter?";
    quizQuestions[6] = "What loop structure would you use if you wanted to iterate if a condition is true?";
    quizQuestions[7] = "What loop structure would you use if you wanted to iterate until a certain condition with one guaranteed execution?";
    quizQuestions[8] = "What statement do you use to declare variables?";
    quizQuestions[9] = "What statement do you use to skip to the next iteration of a loop?";

    quizAnswers[0] = '<label><input type="checkbox" name="Answer1" value="+">+</input></label><br /><label><input type="checkbox" name="Answer1" value="lt">&lt;</input></label><br /><label><input type="checkbox" name="Answer1" value="===">===</input></label><br /><label><input type="checkbox" name="Answer1" value="++">++</input></label>';
    quizAnswers[1] = '<label><input type="radio" name="Answer2" value="++">++</input></label><br /><label><input type="radio" name="Answer2" value="--">--</input></label><br /><label><input type="radio" name="Answer2" value="ampamp">&amp;&amp;</input></label><br /><label><input type="radio" name="Answer2" value="||">||</input></label>';
    quizAnswers[2] = '<label><input type="radio" name="Answer3" value="--">--</input></label><br /><label><input type="radio" name="Answer3" value="lte">&lt;&equals;</input></label><br /><label><input type="radio" name="answer3" value="seq">&equals;&equals;&equals;</input></label><br /><label><input type="radio" name="Answer3" value="ampamp">&amp;&amp;</input></label>';
    quizAnswers[3] = '<label><input type="radio" name="Answer4" value="a+5">a+5</input></label><br /><label><input type="radio" name="Answer4" value="-">a + -5</input></label><br /><label><input type="radio" name="Answer4" value="mod">5%3</input></label><br /><label><input type="radio" name="Answer4" value="5-3">5-3</input></label>';
    quizAnswers[4] = '<label><input type="radio" name="Answer5" value="ampamp">&amp;&amp;</input></label><br /><label><input type="radio" name="Answer5" value="le">&lt;&equals;</input></label><br /><label><input type="radio" name="Answer5" value="||">||</input></label><br /><label><input type="radio" name="Answer4" value="**">**</input></label>';
    quizAnswers[5] = '<input type="text" name="Answer6"></input>';
    quizAnswers[6] = '<input type="text" name="Answer7"></input>';
    quizAnswers[7] = '<input type="text" name="Answer8"></input>';
    quizAnswers[8] = '<input type="text" name="Answer9"></input>';
    quizAnswers[9] = '<input type="text" name="Answer10"></input>';

    quizSolutions[0] = ["", "lt", "===", ""];
    quizSolutions[1] = ["", "--", "", ""];
    quizSolutions[2] = ["", "", "", "ampamp"];
    quizSolutions[3] = ["", "-", "", ""];
    quizSolutions[4] = ["", "", "||", ""];
    quizSolutions[5] = ["for"];
    quizSolutions[6] = ["while"];
    quizSolutions[7] = ["do"];
    quizSolutions[8] = ["var"];
    quizSolutions[9] = ["continue"];

    quizSolutionExplain[0] = "Comparison operators include &lt;,&gt;,&lt;&equals;,&gt;&equals;,==,===,!==,!=";
    quizSolutionExplain[1] = "-- is the decrement operator."; // --
    quizSolutionExplain[2] = "&amp;&amp; is the logical AND operator."; // &&
    quizSolutionExplain[3] = "-(value) is the unary negation operator, (value)-(value) is the minus operator."; // -
    quizSolutionExplain[4] = "|| is the logical OR operator."; // ||
    quizSolutionExplain[5] = "<code>for</code> can be used to specify a fixed number of iterations based on variables.";
    quizSolutionExplain[6] = "<code>while</code> executes cotinuously if and only if the control statement is true.";
    quizSolutionExplain[7] = "<code>do</code> executes cotinuously while the control statement is true but the body is guaranteed to run at least once.";
    quizSolutionExplain[8] = "<code>var</code> is used to declare variables";
    quizSolutionExplain[9] = "<code>continue</code> will stop the current iteration of a loop and go back to the top.";

    for (i = 0; i < quizNumQuestions; i++) {
        quizSolved[i] = false;
    }

    solution.innerHTML = '<button id="submit">Submit</button>';
    solution.innerHTML += '<br />' + '<span id="score">' + quizScore + '</span>' + "/" + quizNumQuestions + " Points.";
}

// function to check quiz answers
function checkQuiz() {
    var correct = true;
    var userAnswers = document.getElementsByTagName("input");
    if ((userAnswers[0].type === "text" || userAnswers[0].type === "number") && userAnswers[0].value !== quizSolutions[question][0]) {
            correct = false;
    } else {
        for (i = 0; i < userAnswers.length; i++) { // for
            if (userAnswers[0].type === "text" || userAnswers[0].type === "number") {

            }
            else {
                if (quizSolutions[question][i] === userAnswers[i].value) { //if
                    if (userAnswers[i].checked === true) {
                        continue;
                    } else { // else
                        correct = false;
                        break;
                    }
                } else {
                    if (!(userAnswers[i].checked === true)) {
                        continue;
                    } else {
                        correct = false;
                        break;
                    }
                }
            }
        }
    }
    if (correct) {
        quizDiv.innerHTML = "That's correct!";
        quizScore++;
    } else {
        quizDiv.innerHTML = "Sorry, that's not right.<br />";
        quizDiv.innerHTML += quizSolutionExplain[question];
    }
    quizSolved[question] = true;
    numSolved++; // ++
    document.getElementById("score").innerHTML = quizScore;
    document.getElementById("submit").innerText = "Next";
    document.getElementById("submit").removeEventListener("click", checkQuiz, false);
    document.getElementById("submit").addEventListener("click", Quiz, false);
}

// function to get next quiz question
function Quiz() {
    quizDiv.innerHTML = "";
    if (document.getElementById("submit")) {
        document.getElementById("submit").removeEventListener("click", Quiz, false);
    }
    while (true) { // while
        question = Math.floor(Math.random() * 10);
        if (numSolved === quizNumQuestions) {
            workspace.innerHTML = "Quiz Complete!";
            workspace.innerHTML += '<br />' + '<span id="score">' + quizScore + '</span>' + "/" + quizNumQuestions + " Points.";
            solution.innerHTML = "";
            return;
        } else if (quizSolved[question] === true) {
            continue;
        } else {
            workspace.innerHTML = '<h3>Quiz!</h3>' + quizQuestions[question] + "<br />" + quizAnswers[question];
            document.getElementById("submit").innerText = "Submit";
            document.getElementById("submit").addEventListener("click", checkQuiz, false);
            return;
        }
    }
}

// function to cleanup quiz when it is switched away from or finished
function cleanupQuiz() {
    document.getElementById("quizDiv").remove();
}

// function to run keyword widget
function checkKeyword() {
    var valid = true;
    var keyType;
    var mdnName;
    var keyword = document.getElementById("keyword").value; // document.getElementById().value
    var code = "<code>" + keyword + "</code>";
    switch (keyword) {
        case "var":
            mdnName = "var";
            keyType = "Statements";
            solution.innerHTML = code + " is the keyword for variable declaration.";
            break;
        case "break":
            mdnName = "break";
            keyType = "Statements";
            solution.innerHTML = code + " is the keyword for exiting the current control statement.";
            break;
        case "function":
            mdnName = "function";
            keyType = "Statements";
            solution.innerHTML = code + " is the keyword for declaring functions.";
            break;
        case "case":
            mdnName = "switch";
            keyType = "Statements";
            solution.innerHTML = code + " is the keyword for declaring a case label.";
            break;
        case "this":
            mdnName = "this";
            keyType = "Operators";
            solution.innerHTML = code + " is the keyword for referencing the object that called a function.";
            break;
        case "switch":
            mdnName = "switch";
            keyType = "Statements";
            solution.innerHTML = code + " is the keyword for declaring a switch statement.";
            break;
        case "if":
            mdnName = "if...else";
            keyType = "Statements";
            solution.innerHTML = code + " is the keyword for declaring an if statement.";
            break;
        case "else":
            mdnName = "if...else";
            keyType = "Statements";
            solution.innerHTML = code + " is the keyword for declaring the else option of an if statement.";
            break;
        case "for":
            mdnName = "for";
            keyType = "Statements";
            solution.innerHTML = code + " is the keyword for declaring a for loop.";
            break;
        case "while":
            mdnName = "while";
            keyType = "Statements";
            solution.innerHTML = code + " is the keyword for declaring a while loop.";
            break;
        case "do":
            mdnName = "do...while";
            keyType = "Statements";
            solution.innerHTML = code + " is the keyword for declaring a do-while loop.";
            break;
        case "const":
            mdnName = "const";
            keyType = "Statements";
            solution.innerHTML = code + " is the keyword to declare a var that cannot be changed.";
            break;
        case "continue":
            mdnName = "continue";
            keyType = "Statements";
            solution.innerHTML = code + " is the keyword to force the next iteration of a loop.";
            break;
        case "typeof":
            mdnName = "typeof";
            keyType = "Operators";
            solution.innerHTML = code + " is the keyword to find the type of a var.";
            break;
        case "in":
            mdnName = "in";
            keyType = "Operators";
            solution.innerHTML = code + " checks if a property is in an object.";
            break;
        case "delete":
            mdnName = "delete";
            keyType = "Operators";
            solution.innerHTML = code + " deletes a property from an object.";
            break;
        case "default":
            mdnName = "default";
            keyType = "Statements";
            solution.innerHTML = code + " specifies a default case in a switch statement.";
            break;
        case "return":
            mdnName = "return";
            keyType = "Statements";
            solution.innerHTML = code + " specifies a return value from a function. Causes function to stop immediately.";
            break;
        case "try":
            mdnName = "try...catch";
            keyType = "Statements";
            solution.innerHTML = code + " declares a try block with error handling.";
            break;
        case "catch":
            mdnName = "try...catch";
            keyType = "Statements";
            solution.innerHTML = code + " specifies what should happen if an error is thrown.";
            break;
        case "finally":
            mdnName = "try...catch";
            keyType = "Statements";
            solution.innerHTML = code + " specifies what should happen after error handling.";
            break;
        case "throw":
            mdnName = "throw";
            keyType = "Statements";
            solution.innerHTML = code + " manually throws an error.";
            break;
        case "class":
            mdnName = "class";
            keyType = "Statements";
            solution.innerHTML = code + " is used to declare a class.";
            break;
        case "instanceof":
            mdnName = "instanceof";
            keyType = "Operators";
            solution.innerHTML = code + " is used to check if an object is an instance of a type.";
            break;
        case "new":
            mdnName = "new";
            keyType = "Operators";
            solution.innerHTML = code + " is used to create new object instances.";
            break;
        default:
            solution.innerHTML = "Sorry! '" + code + "' is not a valid JS keyword. Here's a list: ";
            valid = false;
    }
    if (valid) {
        solution.innerHTML += '<br />It is in the ' + keyType + " category";
        solution.innerHTML += '<br /><a href="' + "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/" + keyType + "/" + mdnName + '">' + "<code>" + keyword + "</code> at Mozilla Developer Network" + "</a>";
    }
    else {
        solution.innerHTML += '<br /><a href="' + "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Lexical_grammar#Keywords" + '">MDN Keyword List</a>';
    }
}

// function to run compare widget
function compare() {
    var left = document.getElementsByTagName("input")[0].value;
    var right = document.getElementsByTagName("input")[1].value;
    var operation = document.getElementById("operation");
    var result;
    switch (operation.value) { // switch
        case "lt":
            result = left < right; //<
            break;
        case "lte":
            result = left <= right; //<=
            break;
        case "gt":
            result = left > right; //>
            break;
        case "gte":
            result = left >= right; //>=
            break;
        case "eq":
            result = left == right; //==
            break;
        case "neq":
            result = left != right; //!=
            break;
        case "seq":
            result = left === right; //===
            break;
        case "sneq":
            result = left !== right; //!==
            break;
    }
    solution.innerHTML = "The Answer is: " + result;

}

// function for setting initial compound tool value
function compoundInit() {
    startValue = Number(document.getElementById("init").value);
    solution.innerHTML = "Start value set at: " + startValue;
}

// function to run compound assignment tool
function compound() {
    var rOperand = Number(document.getElementById("rOperand").value);
    switch (document.getElementsByTagName("select")[0].value) {
        case "+=":
            startValue += rOperand; // +=
            break;
        case "-=":
            startValue -= rOperand; // -=
            break;
        case "*=":
            startValue *= rOperand; // *=
            break;
        case "/=":
            if (rOperand === 0) {
                solution.innerHTML = "Hey! No dividing by 0!";
                return;
            } else {
                startValue /= rOperand;  // /=
            }
            break;
        case "%=":
            if (rOperand === 0) {
                solution.innerHTML = "Hey! No dividing by 0!";
                return;
            } else {
                startValue %= rOperand; // %=
            }
    }
    solution.innerHTML = "Value is now: " + startValue;
}

// function to run calculator widget
function calculator() {
    var left = Number(document.getElementsByTagName("input")[0].value);
    var right = Number(document.getElementsByTagName("input")[1].value);
    var operation = document.getElementById("operation");
    var result;
    switch (operation.value) {
        case "add":
            result = left + right;
            break;
        case "minus":
            result = left - right;
            break;
        case "mult":
            result = left * right;
            break;
        case "div":
            result = left / right;
            break;
        case "mod":
            result = left % right;
    }
    solution.innerHTML = "The Answer is: " + result;
}


// general purpose function for widget switching
function loadWidget() {
    var widgets = document.querySelectorAll("nav button"); // document.querySelectorAll()
    if (this.id === widget) {
        return;
    }
    for (i = 0; i < widgets.length; i++) {
        widgets[i].style = "color: black;";
    }
    if (lastWidget === "Quiz") {
        cleanupQuiz();
    }
    if (widget) {
        lastWidget = widget;
        document.getElementById("backNav").style = "display: block;"; // document.getElementById().style
    }
    widget = this.id;
    console.log("Loading widget: " + widget);
    workspace.innerHTML = "";
    solution.innerHTML = "";
    if (widget === "Calc") {
        solution.innerHTML = "Select a left operand, an operator, a right operand, and then click Solve!";
        workspace.innerHTML = '<h3>Calculator</h3><input type="number"></input><select id="operation"><option value="add">+</option><option value="minus">-</option><option value="mult">*</option><option value="div">/</option><option value="mod">%</option></select><input type="number"></input><button id="calcIt">Solve!</button><br />';
        document.getElementById("calcIt").addEventListener("click", calculator, false);
    } else if (widget === "Compound") {
        solution.innerHTML = "Set an initial value, confirm, select an operation, and press go!";
        workspace.innerHTML = '<h3>Compound Assignment Tool</h3><label for="init">Initial Value:</label><input name="init" id="init" type="number"></input><button id="compoundInit">Set</button><br /><select><option value="+=">+&equals;</option><option value="-=">-&equals;</option><option value="*=">*&equals;</option><option value="/=">/&equals;</option><option value="%=">%&equals;</option></select><input id="rOperand" type="number"></input><button id="compoundIt">Go!</button>';
        document.getElementById("compoundInit").addEventListener("click", compoundInit, false);
        document.getElementById("compoundIt").addEventListener("click", compound, false);
    } else if (widget === "Compare") { // else if
       solution.innerHTML = "Select a left operand, an operator, a right operand, and then click Solve!";
        workspace.innerHTML = '<h3>Comparison Tool</h3><input type="text"></input><select id="operation"><option value="lt">&lt;</option><option value="lte">&lt;&equals;</option><option value="gt">&gt;</option><option value="gte">&gt;&equals;</option><option value="eq">&equals;&equals;</option><option value="neq">!&equals;</option><option value ="seq">&equals;&equals;&equals;</option><option value="sneq">!&equals;&equals;</option></select><input type="text"></input><button id="compareIt">Compare!</button><br />';
        document.getElementById("compareIt").addEventListener("click", compare, false);
    } else if (widget === "Keyword") {
        solution.innerHTML = "Type a keyword, then click the button.";
        workspace.innerHTML = '<h3>Keyword Checker</h3><input id="keyword" type="text"></input><button id="checkKey">Check</button><br />';
        document.getElementById("checkKey").addEventListener("click", checkKeyword, false);
    } else if (widget === "Quiz") {
        quizDiv = document.createElement("div");
        quizDiv.id = "quizDiv";
        var main = document.getElementsByTagName("main")[0];
        main.insertBefore(quizDiv, main.childNodes[2]);
        quizSetup();
        Quiz();
    }
    document.getElementById(widget).style = "color: green;";

    console.log("Finished loading widget: " + widget);
}

// function to load previous widget
function backWidget() {
    console.log("Going Back one widget.");
    document.getElementById(lastWidget).click();
}

// function to run initial page load tasks
function pageSetup() {
    console.log("Starting pageSetup().");

    document.getElementById("backNav").style = "display: none;";

    user = window.prompt("Please enter your name", "Guest"); //window.prompt()
    if (user) {
        document.getElementsByTagName("h2")[0].innerHTML = "Welcome to the JavaScript Learning Center, " + user + "!"; //document.getElementById().innerHTML
    } else {
        document.getElementsByTagName("h2")[0].innerHTML = "Welcome to the JavaScript Learning Center, Guest!"; // document.getElementsByTagName()
        user = "Guest";
    }
    window.alert("So here's how this works:\nYou can try out various activities, including a simple calculator, a short quiz, and a keyword checker."); //window.alert()

    document.getElementById("Calc").addEventListener("click", loadWidget, false);
    document.getElementById("Compound").addEventListener("click", loadWidget, false);
    document.getElementById("Compare").addEventListener("click", loadWidget, false);
    document.getElementById("Keyword").addEventListener("click", loadWidget, false);
    document.getElementById("Quiz").addEventListener("click", loadWidget, false);
    document.getElementById("backNav").addEventListener("click", backWidget, false);

    document.getElementById("backNav").style = "display: none;";

    console.log("pageSetup() Complete.");
}

// start the party
window.addEventListener("load", pageSetup, false); // addEventListener();