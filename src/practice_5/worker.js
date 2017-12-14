import Person from "../../src/practice_5/person.js";
class Worker extends Person{
    constructor(name,age){
        super(name,age);
    }
    introduce(){
        return Person.introduce()+" I am a Worker. I have a job.";
    }
}
module.exports = Worker;

