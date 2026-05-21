 let duplicates=[56,78,90,23,90,76,43,56]
// // //nested for loop to check the duplicates 

// // //outer loop

for(let i =0; i <duplicate.length; i++){
    
// //     //inner loop

   for(let j =i+1; j <duplicate.length; j++){

          if(duplicate[i] === duplicate[j])     {

                 console.log(duplicate[i])
          }





   }


}

//using sort method
let duplicate=[56,78,90,23,90,76,43,56]

console.log("using sort method")
let dup = duplicate.sort()
for(let i =0; i <dup.length; i++ )
    
    {
        if(dup[i] === dup[i+1])//comparing the first data with next dataS
            
            {

            console.log(dup[i])
        }
    
    }