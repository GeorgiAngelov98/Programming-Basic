function sumNumbers(input){
    
    let maxNumber = Number(input[0])
    let index = 1;
    let sum = 0;

    while (sum < maxNumber){
       let number = Number(input[index]);
        index++;
        sum+=number
    }
    console.log(sum)
}
sumNumbers(["20",
"1",
"2",
"3",
"4",
"5",
"6"])