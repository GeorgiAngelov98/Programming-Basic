function newHouse(input){
    let type = input[0];
    let count = Number(input[1]);
    let budget = Number(input[2]);
    let price = 0
    switch(type){
        case "Roses": price = price + 5.00
        if (count>80){
        price = price  - (price * 0.1) 
        };break;
        case "Dahlias":price = price + 3.80
        if(count>90){
            price = price * 0.85
        };break;
        case "Tulips":price = price + 2.80
        if(count>80){
            price = price - (price * 0.15)  
        };break;
        case "Narcissus": price = price + 3
        if (count<120){
            price = price + (price * 0.15)
        };break;
        case "Gladiolus": price = price + 2.50
        if(count<80){
            price = price + (price * 0.20)
        };break;
    }
    let finalSum = count * price
    let diff = Math.abs(budget - finalSum)
    if (budget>=finalSum){
        console.log(`Hey, you have a great garden with ${count} ${type} and ${diff.toFixed(2)} leva left.`)
    } else if (budget<finalSum) {
        console.log(`Not enough money, you need ${diff.toFixed(2)} leva more.`)
    }
}
newHouse(["Narcissus",
"119",
"360"])