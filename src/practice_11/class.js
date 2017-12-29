class Class{
    constructor(number){
        this.number = number;
    }
    getDisplayName(){
        return "Class "+this.number;
    }
    assignLeader(student) {
        if (student.klass.number === this.number) {
            this.leader = student;
        }else{
            console.log("It is not one of us.");
        }
    }
    appendMember(student){
        student.klass = this;
        if(this.hasOwnProperty("teachers")){
            let result ="I am "+this.teachers.name+". I know "+student.name+" has joined Class "+this.number+".";
            console.log(result);
        }

    }
   registerJoinListener(teacher){
        this.teachers=teacher;
    }
    registerAssignLeaderListener(student){
            this.leader = student;
            console.log("I am Tom. I know Jerry become Leader of Class 2.")
        }

}
module.exports = Class;