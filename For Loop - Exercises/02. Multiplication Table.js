function multiplicationTable(input){
    let numb = Number(input[0]);
    let sum = 0;

    for (let i = 1; i <= 10; i++){
        sum = i * numb
        console.log(`${i} * ${numb} = ${sum}`)
    }
}
multiplicationTable(["5"])