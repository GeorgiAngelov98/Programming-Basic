function salary(input){
    let countOfTabs = Number(input[0]);
    let salary = Number(input[1]);
    let index = 2;
    
    for (let i = 1; i <= countOfTabs; i++){
        let numbOfNames = input[index];
        index++;
        if (numbOfNames === "Facebook"){
            salary -=  150
        } else if (numbOfNames === "Instagram"){
         salary -= 150
        } else if (numbOfNames === "Reddit"){
            salary -=  50
        } else {
            salary-=0
        }
    }
    if (salary <= 0){
        console.log(`You have lost your salary.`)
    } else {
        console.log(salary)
    }
}
salary(["3",
"500",
"Facebook",
"Stackoverflow.com",
"softuni.bg"])