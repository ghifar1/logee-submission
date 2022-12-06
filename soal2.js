const input1 = "telkmm";
const input2 = "tlkom";

const checkLength = (input1, input2) => {
    if (input1.length === input2.length) {
        return false
    } else {
        return true
    }
}

const checkCharacter =(input1, input2, isDifferentLength) => {

    if(isDifferentLength){
        let res = input1.match(`/^.*${input2}.*$/`) == null ? 2 : 0

        return res

    } else {
        let diff = 0
        for(let i = 0; i < input1.length; i++){
            if(input1[i] !== input2[i]){
                diff++
            }
        }
        return diff
    }
}

const main = (input1, input2) =>{
    if(typeof input1 !== "string" || typeof input2 !== "string"){
        console.log("Input harus berupa string")
    }

    let changes = 0

    let isDifferentLength = checkLength(input1, input2)
    if(isDifferentLength){
        changes++
    }

    let isDifferentCharacter = checkCharacter(input1, input2, isDifferentLength)
    changes += isDifferentCharacter
    if(changes > 1){
        console.log("true")
    } else {
        console.log("false")
    }
}

main(input1, input2)