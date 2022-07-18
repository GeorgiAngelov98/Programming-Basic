function accountBalance(input){
    let index = 0;
    let sum = 0;
    let text = input[index];


    while (text !== "NoMoreMoney"){
        let currentNumber = Number(text);

        if (currentNumber < 0){
            console.log(`Invalid operation!`)
            break;
        }
        sum += currentNumber
        console.log(`Increase: ${currentNumber.toFixed(2)}`)
        index++;
        text = input[index]
    }
    console.log(`Total: ${sum.toFixed(2)}`)
}
accountBalance(["120",
"45.55",
"-150"])