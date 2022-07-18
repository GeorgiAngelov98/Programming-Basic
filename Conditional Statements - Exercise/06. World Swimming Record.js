function worldSwimmingRecord(input) {
    const secondsWr = Number(input[0])
    const meters = Number(input[1])
    const secondsForOneMeter = Number(input[2])
    const secondAdded = Math.floor(meters/15) * 12.5
    const swimmingTime = meters * secondsForOneMeter + secondAdded
    if (swimmingTime >= secondsWr) {
        const secondsSlower = swimmingTime - secondsWr
        console.log(`No, he failed! He was ${secondsSlower.toFixed(2)} seconds slower.`)

    } else {
        console.log(`Yes, he succeeded! The new world record is ${swimmingTime.toFixed(2)} seconds.`)
    }
}
worldSwimmingRecord(["10464", "1500", "20"]);
