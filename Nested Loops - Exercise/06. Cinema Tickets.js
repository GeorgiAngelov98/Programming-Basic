function cinemaTickets(input){
    let index = 0;

    let command = input[index];
    index++;

    let studentCount = 0;
    let standartCount = 0;
    let kidCount = 0;

    while(command !== "Finish"){
        let movieName = command;
        let freeSpace = Number(input[index]);
        index++;

        let tempCommand = input[index];
        index++;

        let soldTicket = 0;
        while(tempCommand !== "End"){
            let ticketType = tempCommand;
            soldTicket++;

            switch(ticketType){
                case "student": studentCount++; break;
                case "standard": standartCount++;break;
                case "kid": kidCount++;break;
            }
            
            if(freeSpace <= soldTicket){
                break; 
            }
            
            tempCommand = input[index];
            index++;
        }
        let totalFreeSpace = soldTicket / freeSpace * 100;
        console.log(`${movieName} - ${totalFreeSpace.toFixed(2)}% full.`);

        command = input[index];
        index++;
    }
    let totalTickets = standartCount + studentCount + kidCount;
    let studentP = studentCount / totalTickets * 100;
    let standartP = standartCount / totalTickets * 100; 
    let kidP = kidCount / totalTickets * 100;
    console.log(`Total tickets: ${totalTickets}`)
    console.log(`${studentP.toFixed(2)}% student tickets.`);
    console.log(`${standartP.toFixed(2)}% standard tickets.`);
    console.log(`${kidP.toFixed(2)}% kids tickets.`);

}

cinemaTickets(["Taxi",
"10",
"standard",
"kid",
"student",
"student",
"standard",
"standard",
"End",
"Scary Movie",
"6",
"student",
"student",
"student",
"student",
"student",
"student",
"Finish"])