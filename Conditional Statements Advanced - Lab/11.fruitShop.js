function fruitShop(input){
    let type = input[0];
    let day = input[1];
    let count = Number(input[2]);
    let price = 0
    if (day == "Monday","Tuesday","Wednesday","Thursday","Friday"){
        switch(type){
            case "banana":price += 2.50;break;
            case "apple": price += 1.20;break;
            case "orange":price += 0.85;break;
            case "grapefruit":price += 1.45;break;
            case "kiwi":price += 2.70;break;
            case "pineapple":price += 5.50;break;
            case "grapes":price += 3.85;break;
            default:console.log("error");break;
            }
        } else if(day == "Saturday","Sunday"){
            switch(type){
                case "banana":price += 2.70;break;
                case "apple": price += 1.25;break;
                case "orange":price += 0.90;break;
                case "grapefruit":price += 1.60;break;
                case "kiwi":price += 3;break;
                case "pineapple":price += 5.60;break;
                case "grapes":price += 4.20;break;
                default:console.log("error");break;
            }
        
    }
    let finalSum = price * count
    console.log(finalSum.toFixed(2))
}
fruitShop(["orange",
"Sunday",
"3"])