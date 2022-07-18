function mooving(input){
    let index = 0;
    let w = Number(input[index]);
    index++;
    let l = Number(input[index]);
    index++;
    let h = Number(input[index]);
    index++;

    let spaceSize = w * l * h;

    let command = input[index];
    index++;

    while(command !== "Done"){
        let box = Number(command);
        spaceSize -= box;

        if (spaceSize < 0){
            console.log(`No more free space! You need ${Math.abs(spaceSize)} Cubic meters more.`)
            break;
        }
        command = input[index];
        index++;
    }
    if (spaceSize >= 0){
        console.log(`${spaceSize} Cubic meters left.`)
    }
}
mooving(["10", 
"1",
"2",
"4", 
"6",
"Done"])