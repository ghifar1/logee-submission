const reader = require('./consoleReader')

const formatter = new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    maximumFractionDigits: 0,

});

const addCurrToResult = (result, currFormat) => {
    if (result[currFormat] == undefined) {
        result[currFormat] = 1
    } else {
        result[currFormat] += 1
    }
}

const hitungPecahan = (balance, pecahan, result) => {
    if (balance == 0) {
        return result
    }

    if (balance < pecahan[0]) {
        let currFormat = formatter.format(pecahan[0])
        addCurrToResult(result, currFormat)
        return result
    }

    for (let i = pecahan.length - 1; i >= 0; i--) {
        if (balance < pecahan[i]) {
            continue
        } else {
            let currFormat = formatter.format(pecahan[i])
            addCurrToResult(result, currFormat)
            hitungPecahan(balance - pecahan[i], pecahan, result)
            break
        }
    }
}

reader.question("input :", (input) => {
    let balance = input.replace(/,/g, '')
    let pecahan = [100, 200, 500, 1000, 2000, 5000, 10000, 20000, 50000, 100000]
    let result = {}
    hitungPecahan(parseInt(balance), pecahan, result)
    console.log(result)
    reader.close()
})