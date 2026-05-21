let d=33
console.log(d=="33")//otput will be true as it checks only the value and not the data type
console.log(d==="33")//Strict equality operator -it will check the value and datatype-so the output will be false

//if statement 
let isprime=true
//if the isprime true then play the movie
//else ask user to subscribe for the plan 
if (isprime==true){
    console.log("movie is played")

}else{
    console.log("ask user to subscribe")

}
//if else statement 
//income tax slab less than 8 -notax
//more than 8 and less than 15 -10%
//more than 15 -30% tax 

let annualincome=8
if(annualincome<8){
    console.log("No tax deducted")
}else if(annualincome>8 && annualincome<15)
    {
    console.log("10% Tax is deducted")

}else
    {
    console.log("30% tax is deducted")
}
//Switch case condition for the known data value 
//break belongs to the Jump condition 
//iterations
// Req : if type the browser name it should fetch the latest avaialble version
let browserName="chrome"



//[switch] key != [case] value 
switch (browserName) {
    case "chrome":
        console.log("148.0.7778.97")
        break;
    case "firefox":
        console.log("150.0.3")
         break;
    default:
        console.log("browser not supported, please enter the valid browser for windows environment")
        break;
}