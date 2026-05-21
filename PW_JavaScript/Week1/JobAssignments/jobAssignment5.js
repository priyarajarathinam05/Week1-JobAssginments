//Write a JavaScript program to find the largest of three numbers

function largestnumber(num1,num2,num3)
{
if(typeof(num1) === 'number' && typeof(num2) === 'number' && typeof(num3) === 'number')
{

    if(num1 >num2 && num1 >num3)
    {
        return num1;
    }
    else if(num2 >num3 && num2 >num1)
    {
        return num2;
    }
    else (num3 >num1 && num3 >num2)
    {
        return num3;
    }
}
else
    {
        console.log("Enter Valid Input")
    }
}
number=largestnumber(32,56,65)
console.log(number)