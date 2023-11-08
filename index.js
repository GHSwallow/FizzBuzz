const prompt = require("prompt-sync")();

const wordsStartingWithB = [
    'Buzz',
    'Bang',
    'Bong',
]

const rules = [
    fizzRule,
    buzzRule,
    bangRule,
    bongRule,
    fezzRule,
    reverseRule,
]

fizzBuzz()

function selectRulesToRun(){
    let j = 0
    console.log("select rules to run from the list (eg 0,3,4)")
    rules.forEach((rule) => {
        console.log(j + ': ' + rule.name)
        j++
    })
    let input = prompt()
    let rulesSelected = []
    let rulesIndices = input.split(',')
    rulesIndices.forEach((ruleIndex) => {
        rulesSelected.push(rules[ruleIndex])
    })
    return rulesSelected
}

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

function fizzRule(number, arr) {
    if (number % 3 === 0) {
        arr.push('Fizz')
    }
    return arr
}

function buzzRule(number, arr) {
    if (number % 5 === 0) {
        arr.push('Buzz')
    }
    return arr
}

function bangRule(number, arr) {
    if (number % 7 === 0) {
        arr.push('Bang')
    }
    return arr
}

function bongRule(number, arr) {
    if (number % 11 === 0) {
        arr = []
        arr.push('Bong')
    }
    return arr
}

function fezzRule(number, arr) {
    if (number % 13 === 0) {
        let fizzInsertionIndex = 0
        wordsStartingWithB.forEach((word) => {
            fizzInsertionIndex = Math.max(fizzInsertionIndex, arr.indexOf(word))
        })
        arr.splice(fizzInsertionIndex, 0, 'Fezz')
    }
    return arr
}

function reverseRule(number, arr) {
    if (number % 17 === 0) {
        arr.reverse()
    }
    return arr
}

function fizzBuzz(){
    maxNumberToPrintTo = selectNumber()
    let rulesSelected = selectRulesToRun()
    for (let i = 1; i <= maxNumberToPrintTo; i++) {
        let textArray = [];
        rulesSelected.forEach((rule) => {
            textArray = rule(i, textArray)
        })

        if (textArray.length===0){
            console.log(i.toString())
        } else {
            console.log(String(textArray).replaceAll(",", ""))
        }
    }
}