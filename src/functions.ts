import {Student} from "./student";

export function outputStudent(student: Student): void {
    console.log(`
    ${student.firstName} ${student.lastName} (${student.age})
    ${"=".repeat(30)}
    Grades: ${student.grades.map(g => g || "*")}
    `);
}

export const outputStudents = (students: Student[]) : void => {
    students.forEach(student => outputStudent(student))
};
