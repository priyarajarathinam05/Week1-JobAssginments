const data =["chrome",true,132.8]
//adding webkit to index  5
data[5] ="webkit"

console.log(data)
//using pop 
const popdata=data.pop()//last item will be removed
console.log(data)

//using push 
const pushdata=data.push("firefox")//data will be added at last
console.log(data)

//using shift 
const shiftdata=data.shift()//first item will be removed
console.log(data)
