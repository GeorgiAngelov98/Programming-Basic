function combinations(input){
    let number = Number(input[0]);
    let sum = 0; 

    for(let i = 0; i <= number; i++){
        for(let b = 0; b<= number; b++){
            for(let c = 0; c <= number; c++){
                if (i + b + c === number){
                    sum++
                }
            }
        } 
    } 
    console.log(sum)
}
combinations(["20"])