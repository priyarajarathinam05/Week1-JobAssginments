//b) count the number of vowels in a string 'cucumber'

function countVowels(word)

{
    let vowels=["a","e","i","o","u"] //initializing the vowels in array 

    let count=0//intializing the count 

    let newword =word.toLowerCase().split("")//converting the word into lower case and storing it in array 

    
//using for loop 
    for (let i =0; i <newword.length; i++)
        {
            for (let j =0; j < vowels.length; j++)
            {
            
                if (newword[i] === vowels[j])//comparing the given letter with vowels
                    {
                        count++
                        
                    }
            }
             
        }
        return count
   

    



}
result=countVowels("cucumber")//calling the function and storing the output in result 

console.log("No.of Vowels present in the given input :"+"  "+ result)