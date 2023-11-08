for (let i = 1; i <= 100; i++) {
    let textToPrint = ''

    if (i % 3 === 0) {
        textToPrint += 'fizz'
    }

    if (i % 5 === 0) {
        textToPrint += 'buzz'
    }

    if (textToPrint===''){
        textToPrint = i.toString()
    }

    console.log(textToPrint)
}