function addedMsg() {
        const number = Math.floor(Math.random() * 7);
        if (number == 0) {
                return "You could meet a wonderful person.";
        }
        else if (number == 1) {
                return "You could get a ......";
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

message()