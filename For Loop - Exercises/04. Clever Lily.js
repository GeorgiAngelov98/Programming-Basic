function cleverLily(input) {
  let age = Number(input[0]);
  let washingMachinePrice = Number(input[1]);
  let priceForToy = Number(input[2]);
  let sum = 0;
  let currentMoney = 10;
  let countForToy = 0;

  for (let i = 1; i <= age; i++) {
    if (i % 2 === 0) {
      sum += currentMoney;
      currentMoney += 10;
      sum--;
    } else {
      countForToy++;
    }
  }
  sum += priceForToy * countForToy;
  let diff = Math.abs(sum - washingMachinePrice);
  if (sum >= washingMachinePrice) {
    console.log(`Yes! ${diff.toFixed(2)}`);
  } else {
    console.log(`No! ${diff.toFixed(2)}`);
  }
}
cleverLily(["21", "1570.98", "3"]);
