const display = document.getElementById("display");
const display1 = document.getElementById("display1");
function appendToDisplay(input){
    display.value += input;
}
function clearDisplay(){
    display.value = "";
    display1.value = "";
}
function calper(){
    display1.value = display.value/100;
}
function calculate(){
    try{
    display1.value = eval(display.value);
    }
    catch(error){
        display1.value = "Error";
    }
}