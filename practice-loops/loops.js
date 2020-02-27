var num1, num2;
//num1 = window.prompt("Input the First integer", "0");
//num2 = window.prompt("Input the second integer", "0");

if (parseInt(num1, 10) > parseInt(num2, 10)) {
    console.log("The larger of " + num1 + " and " + num2 + " is " + num1 + ".");
}
else
    if (parseInt(num2, 10) > parseInt(num1, 10)) {
        console.log("The larger of " + num1 + " and " + num2 + " is " + num2 + ".");
    }
    else {
        console.log("The values " + num1 + " and " + num2 + " are equal.");
    }
//this is my solution
var a = -3;
var b = -6;
var c = -2;
if (a > 0 && b > 0 && c > 0) {
    alert('The sign is +.');
}
else if (a > 0 && b < 0 && c < 0) {
    alert('The sign is +');
}
else if (a < 0 && b > 0 && c < 0) {
    alert('The sign is +');
}
else if (a < 0 && b < 0 && c > 0) {
    alert('The sign is +');
}
else {
    alert('The sign is -')


/*var x=3;
var y=-7;
var z=2;
if (x>0 && y>0 && z>0)
{
       alert("The sign is +");
}
else if (x<0 && y<0 && z<0)
        {
          console.log("The sign is +");
        }
        else if (x>0 && y<0 && z<0)
        {
          console.log("The sign is +");
        }
        else if (x<0 && y>0 && z<0)
        {
          console.log("The sign is +");
        }
        else
        {
          console.log("The sign is -");
        }
        
        This is their solution*/