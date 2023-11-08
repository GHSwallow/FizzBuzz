for (let i = 1; i <= 200; i++) {
    let startOfTextToPrint = ''
    let endOfTextToPrint = ''

    if (i % 3 === 0) {
        startOfTextToPrint += 'Fizz'
    }

    if (i % 5 === 0) {
        endOfTextToPrint += 'Buzz'
    }

    if (i % 7 === 0) {
        endOfTextToPrint += 'Bang'
    }

    if (i % 11 === 0) {
        startOfTextToPrint = ''
        endOfTextToPrint += 'Bong'
    }

    if (i % 13 === 0) {
        startOfTextToPrint += 'Fezz'
    }

    if (startOfTextToPrint==='' && endOfTextToPrint===''){
        startOfTextToPrint = i.toString()
    }

    console.log(startOfTextToPrint + endOfTextToPrint)
}