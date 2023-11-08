const wordsStartingWithB = [
    'Buzz',
    'Bang',
    'Bong',
]

const prompt = require("prompt-sync")();
maxNumberToPrintTo = selectNumber()
fizzBuzz(maxNumberToPrintTo)

function selectNumber(){
    let input = Number(prompt("Select number to print up to (must be int)"))
    if (isNaN(input)) {
        console.log("input not able to convert to number, try again")
        return selectNumber()
    } else if (!Number.isInteger(input)) {
        console.log("input is not an integer, try again")
        return selectNumber()
    }
    return input
}

function fizzBuzz(maxNumber){
    for (let i = 1; i <= maxNumber; i++) {
        let textArray = [];

        if (i % 3 === 0) {
            textArray.push('Fizz')
        }

        if (i % 5 === 0) {
            textArray.push('Buzz')
        }

        if (i % 7 === 0) {
            textArray.push('Bang')
        }

        if (i % 11 === 0) {
            textArray = []
            textArray.push('Bong')
        }

        if (i % 13 === 0) {
            let fizzInsertionIndex = 0
            wordsStartingWithB.forEach((word) => {
                fizzInsertionIndex = Math.max(fizzInsertionIndex, textArray.indexOf(word))
            })
            textArray.splice(fizzInsertionIndex, 0, 'Fezz')
        }

        if (i % 17 === 0) {
            textArray.reverse()
        }

        if (textArray.length===0){
            console.log(i.toString())
        } else {
            console.log(String(textArray).replaceAll(",", ""))
        }
    }
}