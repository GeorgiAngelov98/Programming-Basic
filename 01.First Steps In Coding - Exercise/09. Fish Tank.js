function fishTank(input){
    let longInCm = (input[0])
    let weidth = (input[1])
    let height = (input[2])
    let percent = (input[3]) / 100 
    let oneLitters = 0.001
    let aqua = longInCm * weidth * height
    let aqualitters = aqua * oneLitters
    let neededLitters = aqualitters * (1 - percent)
    console.log (neededLitters)
}
fishTank(["85 ","75 ","47 ","17 "])