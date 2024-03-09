const student = {
    name: 'akram alim',
    roll: 12,
    class: 'ten',
    marks: {
        math: 80,
        physics: 77,
        bangla: 90,
        chemisty: 65
    }
}

// dot notation
const mark = student.marks
console.log(mark);

const banglaMark = student.marks.bangla;
console.log(banglaMark)


// braket notation
const mathMark = student['marks']['math']
console.log(mathMark)


const subject = 'chemisty'
const subjectMark = student.marks[subject]
console.log(subjectMark)