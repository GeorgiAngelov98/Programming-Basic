function areaOfFigures(input){
    const type = (input[0])
    if (type === "square"){
        const a = Number(input[1])
        const result = a * a
        console.log(result.toFixed(3))
    } else if (type === "rectangle"){
        const a = Number(input[1])
        const b = Number(input[2])
        const result = a * b 
        console.log(result.toFixed(3))
    } else if (type === "circle") {
        const r = Number(input[1])
        const result = Math.PI * r * r
        console.log(result.toFixed(3))
    } else {
        const a = Number(input[1])
        const b = Number(input[2])
        const result = a * b / 2 
        console.log(result.toFixed(3))
    }

}
areaOfFigures (["triangle","4.5","20"])