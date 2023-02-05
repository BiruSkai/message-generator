// Case 1
function addedMsg() {
        const number = Math.floor(Math.random() * 7);
        if (number == 0) {
                return "You could meet a wonderful person.";
        }
        else if (number == 1) {
                return "You could get a lot of present";
        }
        else if (number == 2) {
                return "You might find an ancient gold treasure";
        }
        else if (number == 3) {
                return "Be exited for it!";
        }
        else if (number == 4) {
                return "You might spend the day in the nature.";
        }
        else if (number == 5) {
                return "You might do a great thing for the society.";
        }
        else if(number == 6) {
                return "Let's see what will happen.";
        };
};

const message = () => {
        const number = Math.floor(Math.random() * 7);
        let day;
        switch (number) {   
                case 0:
                        day = "Monday";
                        break;
                case 1:
                        day = "Tuesday";
                        break;
                case 2:
                        day = "Wednesday";
                        break;
                case 3:
                        day = "Thursday";
                        break;
                case 4:
                        day = "Friday";
                        break;
                case 5:
                        day = "Saturday";
                        break;
                case 6:
                        day = "Sunday";
                        break;   
        };
        console.log(`Your luckiest day in the week is ${day}. ${addedMsg()}`);
};

// Trigger for case 1
message();


//Case 2 
const lucky = {
        day: ["Sunday", "Monday", "Tuesday"],
        present: ["money", "car", "free trip"],
        total: ["$1000", "$5000", "$800"]
}

const words = parr => {
        let day;
        let present;
        let total;
for(let i = 0; i<3; i++) {
        let random = Math.floor(Math.random() * 3);
        if ( i === 0) {
                day = parr.day[random];
        } else if ( i === 1) {
                present = parr.present[random];
        } else if ( i === 2) {
                total = parr.total[random];
        }
}
console.log(`On ${day} you might get a ${present} with a total of ${total}.`)
}

/*
//trigger for case 2
words(lucky);
*/