function DepositCalculator(input){
    let DepositSum = Number(input[0]);
    let ForMonth = Number(input[1]);
    let ForYear = Number(input[2]);
    let AllSum = DepositSum * ForYear / 100 
    let sumForMonth = AllSum / 12 
    let allSum2 = DepositSum + ForMonth * sumForMonth
    console.log (allSum2)
    
}
DepositCalculator(["200","3","5.7"])