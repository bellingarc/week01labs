function toPercent(num){
    let pct = num*100
    console.log(`${num} = ${pct.toFixed(2)}%`)
    return pct
}

let taxRate = .07
let taxPct = toPercent(taxRate)    