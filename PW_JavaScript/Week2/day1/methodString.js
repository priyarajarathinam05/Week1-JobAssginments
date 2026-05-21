//length,charAt,uppercase,lowercase and split 

let data="Playwright"
console.log(data.length)
console.log(data.charAt(1))
console.log(data.toLowerCase())
console.log(data.toUpperCase())

let test="Print@your@Name"
console.log(test.split("@"))
console.log(test.split(""))//No delimiter is present then each and every char is splitted 
let v=(test.split("@"))
for(let i=0;i<v.length;i++)//iterating after the split entering the value in new line
{
    console.log(v[i])
}