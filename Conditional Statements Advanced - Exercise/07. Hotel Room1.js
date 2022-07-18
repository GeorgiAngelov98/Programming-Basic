function hotelRoom1(input){
    let month = input[0];
    let countOfNights = Number(input[1]);
    let studioMay = 50;
    let apartmentMay = 65;
    let studioSeptember = 75.20;
    let apartmentSeptember = 68.70;
    let studioAugust = 76;
    let apartmentAugust = 77;

    let sumStudio=0;
    let sumApartment = 0;


    switch(month){
        case "May":
        case "October":
            if (countOfNights > 7 && countOfNights <= 14){
                sumStudio = countOfNights *( studioMay * 0.95)
            } else if (countOfNights >14){
                sumStudio = countOfNights *( studioMay * 0.7)
                sumApartment = countOfNights *( apartmentMay * 0.9)
            } else {
                sumStudio = countOfNights * studioMay
                sumApartment = countOfNights * apartmentMay
            }
            break;

        case "June":
        case "September":
            if (countOfNights > 14) {
                sumStudio = countOfNights *( studioSeptember * 0.8)
                sumApartment = countOfNights *( apartmentSeptember * 0.9)
            }else {
                    sumStudio = countOfNights * studioSeptember;
                    sumApartment = countOfNights * apartmentSeptember 
                }
            break;

        case "July":
        case "August":
            sumStudio = countOfNights * studioAugust
            if (countOfNights > 14){
            sumApartment = countOfNights * apartmentAugust * 0.9
            } else {
                sumApartment = countOfNights * apartmentAugust
            }
            ;break
    }
    console.log(`Apartment: ${sumApartment.toFixed(2)} lv.`)
    console.log(`Studio: ${sumStudio.toFixed(2)} lv.`)
}
hotelRoom1(["August",
"20"])


// – May, June, July, August, September или October

// ⦁	За студио, при повече от 7 нощувки през май и октомври : 5% намаление.
// ⦁	За студио, при повече от 14 нощувки през май и октомври : 30% намаление.
// ⦁	За студио, при повече от 14 нощувки през юни и септември: 20% намаление.
// ⦁	За апартамент, при повече от 14 нощувки, без значение от месеца : 10% намаление.

