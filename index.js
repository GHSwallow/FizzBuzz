for (let i = 1; i <= 100; i++) {
    let text_to_print = ''

    if (i % 3 === 0) {
        text_to_print += 'fizz'
    }

    if (i % 5 === 0) {
        text_to_print += 'buzz'
    }

    if (text_to_print===''){
        text_to_print = i.toString()
    }

    console.log(text_to_print)
}