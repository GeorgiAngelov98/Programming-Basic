function sumOfTwoNumbers(input){
    let start = Number(input[0]);
    let end = Number(input[1]);
    let magicNumber = Number(input[2]);

    let counter = 0;
    let bul = false;

    for (let i = start; i <= end; i++){
        for(let b = start; b <= end; b++){
            counter++
            if (i + b === magicNumber){
                bul = true
                console.log(`Combination N:${counter} (${i} + ${b} = ${magicNumber})`)
                return
            }
        }
    }
    if (!bul){
        console.log(`${counter} combinations - neither equals ${magicNumber}`)
    }
}
sumOfTwoNumbers(["23",
"24",
"20"])