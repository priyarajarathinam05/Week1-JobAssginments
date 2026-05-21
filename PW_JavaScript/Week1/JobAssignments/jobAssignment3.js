//  "You have a continuous string of server logs:
// ERROR: 404 [Time: 12:00] | INFO: Login Success [Time: 12:01] | ERROR: 500 [Time: 12:05]
// Question: I need an array containing only the timestamps where an ERROR occurred. How would you approach this?

// Task: Get an array of timestamps only where an ERROR occurred.

const timeLogs = "ERROR: 404 [Time: 12:00] | INFO: Login Success [Time: 12:01] | ERROR: 500 [Time: 12:05]"

//splitting with delimiter |

const  timedata=timeLogs.split("|")

for(const entry of timedata)
{
    if(entry.includes("ERROR"))
        {
            const timeentry =entry.match(/\[Time: (.*?)\]/); //matching the format with the string given in th input
            console.log(timeentry[1])
    }
    
}

