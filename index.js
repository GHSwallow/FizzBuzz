for (let i = 1; i <= 256; i++) {
    let startOfTextArray = [];
    let endOfTextArray = [];

    if (i % 3 === 0) {
        startOfTextArray.push('Fizz')
    }

    if (i % 5 === 0) {
        endOfTextArray.push('Buzz')
    }

    if (i % 7 === 0) {
        endOfTextArray.push('Bang')
    }

    if (i % 11 === 0) {
        startOfTextArray = []
        endOfTextArray.push('Bong')
    }

    if (i % 13 === 0) {
        startOfTextArray.push('Fezz')
    }

    if (i % 17 === 0) {
        startOfTextArray.reverse()
        endOfTextArray.reverse()
        let temp = startOfTextArray
        startOfTextArray = endOfTextArray
        endOfTextArray = temp
    }

    if (startOfTextArray.length===0 && endOfTextArray.length===0){
        console.log(i.toString())
    } else {
        let startText = String(startOfTextArray).replaceAll(",", "")
        let endText = String(endOfTextArray).replaceAll(",", "")
        console.log(startText + endText)
    }
}