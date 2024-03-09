class TeamMembers{
    name;
    team;
    location;

    constructor(name, team, location){
        this.name = name;
        this.team = team;
        this.location = location;
    }
    feedback(){
        console.log(`${this.name} please feedback us`)
    }
}


class Instructor extends TeamMembers {
    designation = 'web Course Instructor'
    constructor(name, team, location){
        super(name, team, location)
    }
    startClassTime(time){
        console.log(`start the class at ${time}`)
    }
    createClassTest(module){
        console.log(`class test will be excicute module ${module}`)
    }
}

const khilji = new Instructor('khilji','web Team', 'dhaka' )
console.log(khilji)

khilji.startClassTime('10:00 AM')
khilji.createClassTest(30)

const salman = new Instructor('Salam', 'web Team', 'India')
console.log(salman)
salman.startClassTime('12:00 PM')
salman.createClassTest(44)

console.log(`


`)

class Developer extends TeamMembers{
    designation = 'Web Developer'
    constructor(name, team, location){
        super(name, team, location)
    }

    developFeature(feature){
        console.log(`Please Develop the web feature ${feature}`)
    }

    releaseVersion(version){
        console.log(`Release the project version ${version}`)
    }
    
}

const dev = new Developer('akram khan', 'Developer', 'swizerland')
console.log(dev);

dev.developFeature('hightech Super computer');
dev.releaseVersion('1.0.0');
dev.feedback()

console.log(`


`)

class JobPleaceMent extends TeamMembers {
    designation = 'job Commandos'
    constructor(name, team, location){
        super(name, team, location)
    }

    prepearStudents(ex){
        console.log(`prepare students for ${ex}`)
    }
    submitResume(resume){
        console.log(`collect the resume and submit ${resume}`)
    }
   
}

const findJob = new JobPleaceMent('Sazed', 'job pleacement', 'Mirpur-1')
console.log(findJob);

findJob.prepearStudents('job Exam');
findJob.submitResume('for Interview')
findJob.feedback()