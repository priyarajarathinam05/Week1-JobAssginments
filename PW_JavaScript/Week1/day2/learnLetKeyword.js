let firstName="test"
//let firstName="testing"
console.log(firstName)//redeclaration not allowed 
firstName="testing"
console.log(firstName)//reinitialization is allowed
//console.log(empno)
//let empno=324
//no hoisting is allowed
//let keyword is block scope from 2015 let is introduced 
//keyword function 
function print(){
    let empage=25//local variable //block scope 
    {
        let empphno=6773736435
        
    }
    console.log(empphno)
    console.log(empage)
}

print()