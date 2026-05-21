var firstName="test"
var firstName="testing"
console.log(firstName)
//output will be the latest one .No error will thrown for the duplicates 
//Redeclaration is allowed 
firstName="playwright"//reinitialisation is allowed
console.log(firstName)
//output will be playwright 
console.log(empNo)//hoisting 
var empNo=1234
//output will be undefined 
//without variable declaration console is called ,will get the variable is not defined
//console.log(emp)

//keyword function 
function print(){
    var empage=25//local variable 
    {
        var empphno=6773736435
        
    }
    console.log(empphno)
    console.log(empage)
}

print()
//var keyword is function scope 
//phone and age will be printed 
