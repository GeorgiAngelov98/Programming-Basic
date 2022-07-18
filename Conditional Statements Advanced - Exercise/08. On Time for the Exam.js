function exam(input) {          
    let hour = Number(input[0]);     
    let minute = Number(input[1]);   
    let arrivalH = Number(input[2]); 
    let arrivalM = Number(input[3]); 
    let exam = hour * 60 + minute
    let arrival = arrivalH * 60 + arrivalM
    
    if ((arrival - exam >= 1)){
        console.log("Late"); 
        if ((arrivalM - minute) < 0) {
            arrivalH = arrivalH - 1
            arrivalM = arrivalM + 60
        }
        
        if ((arrivalH - hour) === 0 && (arrivalM - minute) < 10) {
            console.log(`${arrivalM - minute} minutes after the start`);
        } else if ((arrivalH - hour) === 0 && (arrivalM - minute) >= 10 && (arrivalM - minute) <= 59) {
            console.log(`${arrivalM - minute} minutes after the start`);
        } else if ((arrivalH - hour) >= 1 && (arrivalM - minute) >= 10) {
            console.log(`${arrivalH - hour}:${(arrivalM - minute)} hours after the start`)
        } else if ((arrivalH - hour) >= 1 && arrivalM - minute < 10) {
            console.log(`${arrivalH - hour}:0${(arrivalM - minute)} hours after the start`);
        }
    }else if ((exam - arrival) <= 30 || (exam - arrival === 0)){
        console.log("On time"); 
        if (minute === 0 && hour !== arrivalH) {
            hour = hour - 1;                          
            minute = minute + 60                      
        }
        if (minute < arrivalM) {
            hour = hour - 1
            minute = minute + 60
        }
        
        if ((hour - arrivalH) === 0 && ((minute - arrivalM) <= 30 && (minute - arrivalM) >=1)) {
            console.log(`${minute - arrivalM} minutes before the start`)
        }
    } else if ((exam - arrival) > 30){
            console.log("Early");
            if (minute === 0) {
                hour = hour - 1;                          
                minute = minute + 60
            }
            if (arrivalM === 0) {
                arrivalH = arrivalH - 1
                arrivalM = arrivalM + 60
            }
            if (minute < arrivalM) {
                hour = hour - 1
                minute = minute + 60
            }
            if ((hour - arrivalH) >= 1 && (minute - arrivalM) < 10) {
                console.log(`${hour - arrivalH}:0${minute - arrivalM} hours before the start`)
            } else if ((hour - arrivalH) >= 1 && (minute - arrivalM) >= 0 && (minute - arrivalM) <=59) {
                console.log(`${hour - arrivalH}:${minute - arrivalM} hours before the start`)
            } else if ((hour - arrivalH) < 1 && ((minute - arrivalM) > 30 && (minute - arrivalM) <=59)) {
                console.log(`${minute - arrivalM} minutes before the start`)
            }
    }
}
onTimeForTheExam(["9","30","9","50"])



// ⦁	Първият съдържа час на изпита – цяло число от 0 до 23.
// ⦁	Вторият съдържа минута на изпита – цяло число от 0 до 59.
// ⦁	Третият съдържа час на пристигане – цяло число от 0 до 23.
// ⦁	Четвъртият съдържа минута на пристигане – цяло число от 0 до 59.
