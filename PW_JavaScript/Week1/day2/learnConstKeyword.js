const firstName="test"
//const firstName="testing"
console.log(firstName)
//firstName="Playwright"
console.log(firstName)//Type error assignment to constant variable 
//redeclaration and reinitialization not possible in const
//console.log(empNo)
//empNo=34324//no hoisting is allowed Reference error 
function print(){
    const empage=25//local variable //block scope 
    {
        const empphno=6773736435
        console.log(empphno)
        
    }
    
    console.log(empage)
}

print()