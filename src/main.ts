import {Student} from "./student"
import {outputStudents, outputStudent} from "./functions"

const student1: Student = {
    firstName: "Max",
    lastName: "Mustermann",
    age: 22,
    grades: [{
        name: "Philosophy",
        grades: [1, "A", 3, "B", undefined,]
    },
        {
            name: "German",
            grades: [1, 5, 3, 2, "C"]
        }]
};

const student2: Student = {
    firstName: "Anton",
    lastName: "Meier",
    age: 16,
    grades: [{
        name: "Philosophy",
        grades: [1, "A", 3, "B", undefined,]
    },
        {
            name: "German",
            grades: [1, 5, 3, 2, "C"]
        }]
};

// const student3: Student = {
//     firstName: "Berta",
//     lastName: "Müller",
//     age: 17,
//     grades: ["A", undefined, 1]
// };
//
// const  student4: Student = {
//     firstName: "Cäsar",
//     lastName: "Schmidt",
//     age: 17,
//     grades: ["A", 1, undefined, 3, 2, 4, 5]
// };

const students: Student[] = [student1, student2];

outputStudent(student1);
outputStudents(students);
