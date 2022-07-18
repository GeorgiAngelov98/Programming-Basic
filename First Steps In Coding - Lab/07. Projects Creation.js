function projectsCreations (input){
    let theArchitect = (input[0]);
    let neededHours = Number (input[1]);
    let time = neededHours * 3 ;
    console.log (`The architect ${theArchitect} will need ${time} hours to complete ${neededHours} project/s.`);

}
projectsCreations(["George ","4 "]);