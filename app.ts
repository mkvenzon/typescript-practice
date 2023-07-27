function addFunction(num1 : number, num2 : number, showResult : boolean, message : string){
    const result = num1 + num2;

    if(showResult){
       console.log(`${message}`,(result))
    }else{
       console.log(`${message}`,'Not Equal')
    }
}

const number1 = 5;
const number2 = 10;
const showResult = true;
const message = 'The sum is: ';

(addFunction(number1, number2, showResult, message))