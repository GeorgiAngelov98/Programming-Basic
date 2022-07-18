function trainTheTrainers(input){
    let index = 0;
    let teachersCount = Number(input[index]);
    index++;
    let command = input[index];
    index++;
    let sumGrade = 0;
    let counter = 0;

    while (command !== "Finish"){
        let name = command;
        let currentGradeSum =  0;
        counter++;
       for (let i = 0; i < teachersCount; i++){
           let grade = Number(input[index]);
           index++;
           currentGradeSum += grade;
       }
       let currentAvg = currentGradeSum / teachersCount
       sumGrade += currentAvg; 
       console.log(`${name} - ${currentAvg.toFixed(2)}.`)
       command = input[index];
       index++;
    }
    let avg = sumGrade / counter
    console.log(`Student's final assessment is ${avg.toFixed(2)}. `)
}
trainTheTrainers(["3",
"Arrays",
"4.53",
"5.23",
"5.00",
"Lists",
"5.83",
"6.00",
"5.42",
"Finish"])