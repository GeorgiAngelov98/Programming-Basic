function journey(input){
    let budget = Number(input[0]);
    let season = input[1];
    let destination ;
    let hotel ;
    switch(season){
        case "summer":
        if(budget<=100){
          budget = budget * 0.3
          destination = "Bulgaria"
          hotel = "Camp"
        } else if (budget>100&&budget<=1000){
           budget = budget * 0.4
            destination = "Balkans"
            hotel = "Camp"
        } else if (budget>1000){
            budget = budget * 0.9
            destination = "Europe"
            hotel = "Hotel"
        };break;
        case "winter":
        if (budget<=100){
            budget = budget * 0.7
            destination = "Bulgaria"
            hotel = "Hotel"
        }else if (budget>100&&budget<=1000){
            budget = budget * 0.8
            destination = "Balkans"
            hotel = "Hotel"
        } else if (budget>1000){
            budget = budget * 0.9
            destination = "Europe"
            hotel = "Hotel"
        }
    }
    console.log(`Somewhere in ${destination}`)
    console.log(`${hotel} - ${budget.toFixed(2)}`)
}
journey(["50", "summer"])