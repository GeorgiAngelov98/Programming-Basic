function suppliesForSchool(input){
    let penPacksPrice = 5.80
    let marckerPacksPrice = 7.20
    let detergentPackPrice = 1.20
    let penPacksNumber = Number(input[0])
    let marckerPacksNumber = Number(input[1])
    let detergentPacksNumber = Number(input[2])
    let discountPrice = Number(input[3])
    let finalPrice = (detergentPackPrice * detergentPacksNumber) + (penPacksPrice* penPacksNumber) + (marckerPacksPrice * marckerPacksNumber)
    let finalPriceDiscount = finalPrice - (discountPrice / 100) * finalPrice
    console.log(finalPriceDiscount)
 
}
suppliesForSchool(["2 ", "3 ", "4 ", "25 "])