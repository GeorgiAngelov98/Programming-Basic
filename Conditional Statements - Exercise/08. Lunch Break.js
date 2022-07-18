function lunchBreak(input) {
    const tvSeries = input[0]
    const episodeDur = Number(input[1])
    const breakTime = Number(input[2])
    const lunchTime = breakTime / 8
    const restTime = breakTime / 4
    const remaingTime = Math.abs(breakTime - lunchTime - restTime)
    const freeTime = Math.abs(remaingTime - episodeDur)
    if (remaingTime >= episodeDur){
        console.log(`You have enough time to watch ${tvSeries} and left with ${Math.ceil(freeTime)} minutes free time.`)

    }else {
        console.log(`You don't have enough time to watch ${tvSeries}, you need ${Math.ceil(freeTime)} more minutes.`)

        
    }
}
lunchBreak(["Game of Thrones", "60", "96"])
 