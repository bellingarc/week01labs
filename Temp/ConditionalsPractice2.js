function assignGrade(percentage){
    let grade
    if (percentage >=90){
        grade = 'A'
    }else if (percentage >=80){
        grade = 'B'
    }else if (percentage >=70){
        grade = 'C'
    }else if (percentage >=60){
        grade = 'D'
    }else if (percentage< 60){
     grade = 'F'
 } else {
     console.log('Grade not calculable')
     return
 }

 console.log(grade === 'A' ? `Your grade is an ${grade}` : `Your grade is a ${grade}.`)
}

assignGrade(34)

assignGrade(67)

assignGrade(104)

assignGrade('babu')