const studentData = [

    {
        class: 10,
        details: [
            {
                studentId: '1',
                gradingDetails: [{ grade: 'A' }]
            },
            {
                studentId: '2',
                gradingDetails: [{ grade: 'B' }]
            }
        ]
    },
    {
        class: 11,
        details: [
            {
                studentId: 3,
                gradingDetails: [{ grade: 'B' }]
            },
            {
                studentId: 4,
                gradingDetails: [{ grade: 'D' }]
            }
        ]
    },
]
const getGradeTenB = studentData[0].details[1].gradingDetails[0].grade
console.log('Class 10:', getGradeTenB)
const getGradeB = studentData[1].details[0].gradingDetails[0].grade
const getGradeD = studentData[1].details[1].gradingDetails[0].grade
console.log('Class 11:', getGradeB)
console.log('Class 11:', getGradeD)