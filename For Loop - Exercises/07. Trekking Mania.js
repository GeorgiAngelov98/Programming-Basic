function trekkingMania(input){
    let countOfGroups = Number(input[0]);
    let index = 1;

    let mountain1 = 0;
    let mountain2 = 0;
    let mountain3 = 0;
    let mountain4 = 0;
    let mountain5 = 0;

    for(let i = 1; i <= countOfGroups; i++){
        let countOfPeople = Number(input[index]);
        index++;

        if (countOfPeople <= 5){
            mountain1 += countOfPeople
        } else if (countOfPeople > 5 && countOfPeople <= 12){
            mountain2 += countOfPeople
        } else if (countOfPeople > 12 && countOfPeople <= 25 ){
            mountain3+=countOfPeople;
        } else if (countOfPeople > 25 && countOfPeople <=40 ){
            mountain4 += countOfPeople
        } else {
            mountain5 += countOfPeople
        }
    }
    let sumOfPeople = mountain1 + mountain2 + mountain3 + mountain4 + mountain5

    let mountain1Percent = mountain1 / sumOfPeople * 100
    let mountain2Percent = mountain2 / sumOfPeople * 100
    let mountain3Percent = mountain3 / sumOfPeople * 100
    let mountain4Percent = mountain4 / sumOfPeople * 100
    let mountain5Percent = mountain5 / sumOfPeople * 100

    console.log(`${mountain1Percent.toFixed(2)}%`)
    console.log(`${mountain2Percent.toFixed(2)}%`)
    console.log(`${mountain3Percent.toFixed(2)}%`)
    console.log(`${mountain4Percent.toFixed(2)}%`)
    console.log(`${mountain5Percent.toFixed(2)}%`)
}
trekkingMania(["10","10","5","1","100","12","26","17","37","40","78"])


// ⦁	Група до 5 човека – изкачват Мусала
// ⦁	Група от 6 до 12 човека – изкачват Монблан
// ⦁	Група от 13 до 25 човека – изкачват Килиманджаро
// ⦁	Група от 26 до 40 човека –  изкачват К2
// ⦁	Група от 41 или повече човека – изкачват Еверест
