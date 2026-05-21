//print login and the opentaps string from the URL?
//http://leaftaps.com/opentaps/control/login

let url ="http://leaftaps.com/opentaps/control/login"

let newurl = url.split("/")//splitting the string


//using for loop to traverse through each word and finding the word 
for (let i =0;i <=newurl.length; i++)
    {
    if(newurl[i] === "login" || newurl[i] === "opentaps")
    {
        console.log (newurl[i])
    }
}

