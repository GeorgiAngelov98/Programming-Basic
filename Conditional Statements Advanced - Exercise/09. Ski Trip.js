function skiTrip(input){
    let nightCount = Number(input[0]);
    let typeOfRoom = input[1];
    let grade = input[2];
    let discount = 0;
    let price = 0;
    let nights = nightCount - 1
    let discountGrade = 0;

    switch(typeOfRoom){
        case "room for one person": price += 18;
            if (nightCount<=10){
               discount = (price * nights) 
            } else if (nightCount > 10 && nightCount <=15){
               discount = (price * nights) 
            } else {
               discount = (price * nights)           
            }break;
        case "apartment": price += 25;
            if (nightCount <= 10){
                discount = (price * nights) * 0.7
            } else if (nightCount >10 && nightCount <=15){
                discount = (price * nights) * 0.65
            }else {
                discount = (price * nights) * 0.5
            }break;

        case "president apartment": price +=35;
            if (nightCount <= 10){
                discount = (price * nights) * 0.9
            } else if (nightCount > 10 && nightCount <= 15){
                discount = (price * nights) * 0.85
            } else {
                discount = (price * nights) * 0.8
            }break;
        }
    if (grade == "positive"){
       discountGrade = discount + (discount * 0.25)
    } else if (grade == "negative"){
       discountGrade = discount - ( discount * 0.1)  
    }

    console.log(discountGrade.toFixed(2))

}
skiTrip(["2",
"apartment",
"positive"])

// ⦁	"room for one person" – 18.00 лв за нощувка
// ⦁	"apartment" – 25.00 лв за нощувка 
// ⦁	"president apartment" – 35.00 лв за нощувка

