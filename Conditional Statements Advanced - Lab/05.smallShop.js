function smallShop(input){
    let product = (input[0])
    let town = input[1]
    let quanatity = Number(input[2])
    let price = 0

    switch(town){
    case "Sofia":
        switch(product){
            case "coffee": price = quanatity * 0.5; break 
            case "water": price = quanatity * 0.8; break 
            case "beer":price = quanatity * 1.2; break 
            case "sweets":price = quanatity * 1.45;break
            case "peanuts":price = quanatity * 1.6;break
        }
        break
    }switch(town){
        case "Plovdiv":
            switch(product){
                case "coffee": price = quanatity * 0.4; break 
                case "water": price = quanatity * 0.7; break 
                case "beer":price = quanatity * 1.15; break 
                case "sweets":price = quanatity * 1.3;break
                case "peanuts":price = quanatity * 1.5;break
            }
            break

    }switch(town){
        case "Varna":
            switch(product){
                case "coffee": price = quanatity * 0.45; break 
                case "water": price = quanatity * 0.7; break 
                case "beer":price = quanatity * 1.1; break 
                case "sweets":price = quanatity * 1.35;break
                case "peanuts":price = quanatity * 1.55;break

            }
            break
    }
    console.log(price)
}
smallShop(["beer",
"Sofia",
"6"])