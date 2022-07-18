function foodDelivery(input){
    let chickenMenu = 10.35 
    let fishMenu = 12.40 
    let vegetarianMenu = 8.15
    let sweetThingPercent = 0.2
    let sumForDelivery = 2.5
    let numberOFChicken = (input[0])
    let numberOfFish = (input[1])
    let numberOfVegetarian = (input[2])
    let priceOfChicken = chickenMenu * numberOFChicken
    let priceOfFish = fishMenu * numberOfFish
    let priceOfVegetarian = vegetarianMenu * numberOfVegetarian
    let allMenusPrice = priceOfChicken + priceOfFish + priceOfVegetarian
    let priceOfSweetThings = sweetThingPercent * allMenusPrice
    let allPriceCost = allMenusPrice + priceOfSweetThings + sumForDelivery
    console.log (allPriceCost)

}

foodDelivery (["2 ","4 ","3 "])