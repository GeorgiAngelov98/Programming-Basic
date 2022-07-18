function hotelRoom(input){
    let month = input[0];
    let count = Number(input[1]);
    let mayApartament = 65;
    let mayStudio = 50;
    let juneApartment = 68.70
    let juneStudio = 75.20;
    let julyApartment = 77;
    let julyStudio = 76; 
    let priceStudio = 0;
    let priceApartment = 0;
    switch(month) {
        case"May":
        case"October":
        priceApartment = mayApartament * count;
        priceStudio = mayStudio * count;
        if(count > 7 && count <= 14) {
            priceStudio -= priceStudio * 0.05;
        } else if(count > 14) {
            priceStudio *= 0.7
           priceApartment = count * mayApartament *0.9
        } 
        break;
        case"June":
        case"September":
        priceApartment = juneApartment * count;
        priceStudio = juneStudio * count;
        if(count > 14) {
            priceStudio -= priceStudio * 0.2;
            priceApartment -= priceApartment * 0.1;
        }
        break;
        case"July":
        case"August":
        priceApartment = julyApartment * count;
        priceStudio = julyStudio * count;
        if(count > 14) {
            priceApartment -= priceApartment * 0.1;
        }
        break;
    }
    console.log(`Apartment: ${priceApartment.toFixed(2)} lv.`)
    console.log(`Studio: ${priceStudio.toFixed(2)} lv.`)
}
// hotelRoom(["October","15"])
// hotelRoom(["June","14"])
// hotelRoom(["August","20"])
hotelRoom(["May","15"])
// – May, June, July, August, September или Octobe
