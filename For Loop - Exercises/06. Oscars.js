function oscars (input){
    let index  = 0;
    let nameOfTheActor= input[index];
    index++
    let pointsFromAcademy = Number(input[index]);
    index++
    let countOfGrades = Number(input[index]);
    index++;

    let isNominee = false

    for(let i = 0; i < countOfGrades; i++){
        let currentName = input[index];
        index++;
        let currentPoints = Number(input[index]);
        index++;
         pointsFromAcademy += (currentName.length * currentPoints) /2
    
        if (pointsFromAcademy > 1250.5){
            isNominee = true;
            console.log(`Congratulations, ${nameOfTheActor} got a nominee for leading role with ${pointsFromAcademy.toFixed(1)}!`)
        
            ;break;
        }
        }
        let diff = Math.abs(pointsFromAcademy - 1250.5)
         if (!isNominee){
            console.log(`Sorry, ${nameOfTheActor} you need ${diff.toFixed(1)} more!`)
        }
    
}
oscars(["Sandra Bullock",
"340",
"5",
"Robert De Niro",
"50",
"Julia Roberts",
"40.5",
"Daniel Day-Lewis",
"39.4",
"Nicolas Cage",
"29.9",
"Stoyanka Mutafova",
"33"])





// ⦁	Име на актьора - текст
// ⦁	Точки от академията - реално число в интервала [2.0... 450.5]
// ⦁	Брой оценяващи n - цяло число в интервала[1… 20]
// На следващите n-на брой реда:
// ⦁	Име на оценяващия - текст
// ⦁	Точки от оценяващия - реално число в интервала [1.0... 50.0]
