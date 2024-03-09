const student = {
    name: 'sharif mia',
    money: 5000,
    study: 'Math',
    subjects: ['calculas', 'algebra', 'geometry'],
    exam: function(){
        return this.name + 'is participating in an exam'
    },

    improveExam: function(subject){
        this.exam()
        return `${this.name} is taking improvment exam on ${subject}`
    },

    treatDey: function(ammount){
        this.money = this.money - ammount
        return this.money;
    }
}

const outPut = student.exam()
// console.log(outPut)

const  reExam = student.improveExam('geometry')
console.log(reExam)

const remening = student.treatDey(900)
console.log(remening)