function tennisRanklist(input){
    let countOfTournaments = Number(input[0]);
    let startPoints = Number(input[1]);
    let index = 2;
    let points = 0;
    let wins = 0;


    for (let i = 0; i <= countOfTournaments; i++){
        let tournamentWins = input[index];
        index++;

        switch(tournamentWins){
            case "W": points +=2000; wins++;break;
            case "F":  points += 1200;break;
            case "SF": points += 720;break;
        }
    }
    let allPoints = startPoints + points
    let avaragePoints = points / countOfTournaments
    let allWins = wins / countOfTournaments * 100
    console.log(`Final points: ${allPoints}`)
    console.log(`Average points: ${Math.floor(avaragePoints)}`)
    console.log(`${allWins.toFixed(2)}%`)
}
tennisRanklist(["5","1400","F","SF","W","W","SF"])