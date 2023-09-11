let displayValue=document.getElementById("display");
function appendToDisplay(num){
    displayValue.value+=num;
}
   function printResult(){
    let result;
    result=eval(displayValue.value);
    displayValue.value=result;
}
function clearScreen(){
    displayValue.value=""
}
function delElement(){
    displayValue.value=displayValue.value.slice(0,-1);
}
function calculatesqrt(){
    if(displayValue.value>0){
        displayValue.value=Math.sqrt(displayValue.value);
    }
    else if(displayValue.value<0){
        displayValue.value="Invalid Input"
    }
}
function calculatePi(){
   displayValue.value=Math.PI;
}