// Define the array of student objects
interface Student {
    name: string;
    id: number;
    grades: number[];
    averageRate?: number; // Optional property to be added later
}

let students: Student[] = [
    { name: "Alice", id: 1, grades: [85, 92, 88] },
    { name: "Bob", id: 2, grades: [78, 81, 74] },
    { name: "Charlie", id: 3, grades: [92, 90, 95] }
];

// Function to calculate the average rate and add it to each student object
function calculateAverageRate(students: Student[]): void {
    students.forEach(student => {
        let total = student.grades.reduce((sum, grade) => sum + grade, 0);
        student.averageRate = total / student.grades.length;
    });
}

// Calculate and add the average rate to each student object
calculateAverageRate(students);

// Output the updated students array
console.log(students);
