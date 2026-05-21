// Write a JavaScript program to print numbers from 1 to 20, skipping numbers divisible by 5

function printnum(number1){

    for (let i =1; i <=number1; i++)
        {
            if(i % 5 !==0)
            {
                console.log(i)
                continue;
            }
        }
}

printnum(20)