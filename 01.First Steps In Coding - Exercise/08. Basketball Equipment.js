function basketballEquipment(input){
    let yeartax = Number (input[0])
    let basketbalShoes = yeartax - (0.4 * yeartax)
    let basketbalSuit = basketbalShoes - (0.2 * basketbalShoes)
    let basketbal = basketbalSuit / 4 
    let acces = basketbal / 5 
    let finalPrice = basketbalShoes + basketbalSuit + basketbal + acces + yeartax
    console.log(finalPrice) 

}

basketballEquipment(["365 "])