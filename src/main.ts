const outputStudents = (students: Student[]) : void => {
    students.forEach(student => outputStudent(student))
};

type Student = {
    firstName: string;
    lastName: string;
    age: number;
    grades: Grade[];
};

type Grade = 1 | "A" | 2 | "B" | 3 | "C" | 4 | "D" | 5 | "E" | 6 | "F" | undefined;

const student1: Student = {
    firstName: "Max",
    lastName: "Mustermann",
    age: 22,
    grades: [1, "A", 3, "B", undefined, 1, 5, 3, 2, "C"]
};

const student2: Student = {
    firstName: "Anton",
    lastName: "Meier",
    age: 16,
    grades: [1, 4, 3, 1, "A", undefined, 1, 2]
};

const student3: Student = {
    firstName: "Berta",
    lastName: "Müller",
    age: 17,
    grades: ["A", undefined, 1]
};

const  student4: Student = {
    firstName: "Cäsar",
    lastName: "Schmidt",
    age: 17,
    grades: ["A", 1, undefined, 3, 2, 4, 5]
};

const students: Student[] = [student1, student2, student3, student4];

// outputStudent(student1);

outputStudents(students);

function outputStudent(student: Student): void {
    console.log(`
    ${student.firstName} ${student.lastName} (${student.age})
    ${"=".repeat(30)}
    Grades: ${student.grades.map(g => g || "*")}
    `);
}


