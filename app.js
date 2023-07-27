function addFunction(num1, num2, showResult, message) {
    var result = num1 + num2;
    if (showResult) {
        console.log("".concat(message), (result));
    }
    else {
        console.log("".concat(message), 'Not Equal');
    }
}
var number1 = 5;
var number2 = 10;
var showResult = true;
var message = 'The sum is: ';
(addFunction(number1, number2, showResult, message));
