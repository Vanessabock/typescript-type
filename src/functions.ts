import {Student} from "./student";

export function outputStudent(student: Student): void {
    const studentInfo: string = `${student.firstName} ${student.lastName} (${student.age})`;
    console.log(
        `${studentInfo}
${"=".repeat(studentInfo.length)}
Grades:${student.grades.map(subject => `\n${subject.name}: ${subject.grades.map(g => g || "*")}`) } 
             `)
}

export const outputStudents = (students: Student[]): void => {
    students.forEach(student => outputStudent(student))
};
