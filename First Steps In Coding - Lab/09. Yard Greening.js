function yardGreening(input){
    let pricePerOneM = Number([7.61])
    let price = Number (input[0])
    let discount = Number ([0.18])
    let sum = (pricePerOneM*price)
    let finalDiscount = (sum*discount)
    let finalPrice = (sum-finalDiscount)
    console.log(`The final price is: ${finalPrice} lv.`)
    console.log(`The discount is: ${finalDiscount} lv.`)
    
}
yardGreening (["550"])