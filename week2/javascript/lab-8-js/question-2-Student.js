function Student(firstName, lastName){
    this.firstName = firstName;
    this.lastName = lastName;
    this.grades = [];

    // methods
    this.inputNewGrade = function (grade) {
        this.grades.push(grade);
    };
    this.computeAverage = function () {
        return this.grades.reduce((acc, curr, _, array) => acc + curr/array.length, 0);
    };
}


const student1 = new Student("John", "Doe");
student1.inputNewGrade(98);
student1.inputNewGrade(94);
student1.inputNewGrade(99);
console.log(student1.computeAverage())

const student2 = new Student("Bob", "Roth");
student2.inputNewGrade(95);
student2.inputNewGrade(94);
student2.inputNewGrade(94);
console.log(student2.computeAverage())