function getUserNumberInput(){
    return parseInt(userInput.value);
}

function textAndResult(operator,resultBeforeCalc,enteredNumber){
    let calcDescription=` ${resultBeforeCalc} ${operator} ${enteredNumber} `;
    outputResult(currentResult,calcDescription);
}

function add(){
    const enteredNumber=getUserNumberInput();
    const initialResult=currentResult;
    currentResult+=initialResult;
    textAndResult('+',initialResult,enteredNumber);
}
function subtract(){
    let enteredNumber=userInput;
    let initialResult=currentResult;
    currentResult-=enteredNumber;
    textAndResult('-',initialResult,enteredNumber);

}

function multiply() {
    const enteredNumber = getUserNumberInput();
    const initialResult = currentResult;
    currentResult *= enteredNumber;
    createAndWriteOutput('*', initialResult, enteredNumber);
}

function divide() {
    const enteredNumber = getUserNumberInput();
    const initialResult = currentResult;
    currentResult /= enteredNumber;
    createAndWriteOutput('/', initialResult, enteredNumber);
}

addBtn.addEventListener('click',add)
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);