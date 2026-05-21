//fn should be declared as global 
function printName(name){
    console.log(name)
}
printName("testJavaScript")
printName("playwright")

//return  console.log should be used 
function add(a,b){
    adding=a+b
    sub=b-a
    return adding  +"  "+ sub
}
add(45,89)//it will call the function but no result
console.log(add(45,89))//result will be given

//console.log(add("test","script"))

