function returnGreater(num1, num2){
    if (num1 > num2){
        console.log(`${num1} is greater.`)
        return num1
    } else if ( num1 == num2){
        console.log(`numbers ${num1} and ${num2} are equal, no greater value`)
        return num1
    } else if(num2 > num1) {
        console.log(`${num2} is greater.`)
        return num2
    } else {
        console.log(`comparison not possible`)
    }
}
returnGreater(1,3)

returnGreater(0.04, 0.0045)

returnGreater("A", "B")

returnGreater(true, "a")