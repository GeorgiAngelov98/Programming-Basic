function repainting(input){
    let neededkvmN = Number (input[0])
    let neededPaint = Number (input[1])
    let thinner = Number (input[2])
    let hoursNeededForWork = Number (input[3])
    let Nylon = 1.5
    let paint = 14.5
    let thinnerBonus = 5
    let forCaseForPercent =  0.1
    let forCaseForNylon = 2
    let forBags = 0.4
    let sumforNylon = (neededkvmN + forCaseForNylon) * Nylon 
    let sumforPaint =  (neededPaint + neededPaint * forCaseForPercent) * paint
    let sumForThinner = thinner * thinnerBonus
    let finalPriceForMaterials = sumforNylon + sumforPaint + sumForThinner + forBags
    let sumForWorkers = finalPriceForMaterials * 0.3
    let finalSumForWorkers = sumForWorkers * hoursNeededForWork
    let finalSum = finalPriceForMaterials + finalSumForWorkers
    console.log(finalSum)

}
repainting (["10 ","11 ","4 ","8 "])