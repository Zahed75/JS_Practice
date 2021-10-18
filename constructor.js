function Student(name,age,cgpa,lang){
    this.name = name;
    this.age = age;
    this.cgpa = cgpa;
    this.lang = lang;
}
var students= new Student("Zahed",23,3.85,["Bangla","Hindi","English"]);
console.log(Student.name);
console.log(Student.age);
console.log(Student.cgpa);
console.log(Student.lang)