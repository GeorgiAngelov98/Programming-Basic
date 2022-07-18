function sequence2k1(input){
    let num = Number(input[0]);
    sum = 0

    while ( num > sum){
      sum *= 2 
      sum++
      if (sum > num){
          break;
      }
      console.log(sum)
    }
}
sequence2k1(["17"])