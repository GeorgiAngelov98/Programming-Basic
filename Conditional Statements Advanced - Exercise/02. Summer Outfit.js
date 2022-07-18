function summerOutfit(input){
    let degreese = Number(input[0]);
    let timeOfDay = input[1];
    let outfit ;
    let shoes ;
    switch (timeOfDay){
        case "Morning":
            if(degreese>=10&&degreese<=18){
                outfit = "Sweatshirt"
                shoes = "Sneakers"
            }else if(degreese>18&&degreese<=24){
                outfit = "Shirt"
                shoes = "Moccasins"
            } else if (degreese>=25){
                outfit = "T-Shirt"
                shoes = "Sandals"
            };break;
        case "Afternoon":
            if(degreese>=10&&degreese<=18){
                outfit = "Shirt"
                shoes = "Moccasins"
            }else if (degreese>18&&degreese<=24){
                outfit = "T-Shirt"
                shoes = "Sandals"
            } else if (degreese>=25){
                outfit = "Swim Suit"
                shoes = "Barefoot"
            }

        case "Evening":
            if(degreese>=10&&degreese<=18){
                outfit = "Shirt"
                shoes = "Moccasins"
            } else if (degreese>18&&degreese<=24){
                outfit = "T-Shirt"
                shoes = "Sandals"
            } else if (degreese>=25){
                outfit = "Shirt"
                shoes = "Moccasins"
            }
    }
    console.log(`It's ${degreese} degrees, get your ${outfit} and ${shoes}.`)
}
summerOutfit(["22",
"Afternoon"])
