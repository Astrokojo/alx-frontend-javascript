//all of the outputs are shown in the browser console

interface Teacher {
    readonly firstName: string; // readonly makes it modifiable only dring instantiation
    readonly lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number; // question mark makes it an optional attribute
    location: string;
    [propName: string]: any; // allows for additional arbitrary attributes
}

//  create instance of TEacher
const teacher: Teacher = {
    firstName: 'John',
    fullTimeEmployee: false,
    lastName: 'Doe',
    location: 'London',
    contract: false, // Additional attribute
};

console.log(teacher); // Output: {firstName: 'John', fullTimeEmployee: false, lastName: 'Doe', location: 'London', contract: false}

interface Directors extends Teacher {
    numberOfReports: number;
}

const director: Directors = {
    firstName: 'John',
    lastName: 'Doe',
    location: 'London',
    fullTimeEmployee: true,
    numberOfReports: 17,
};
// Example usage
console.log(director); // Output:{firstName: 'John', lastName: 'Doe', location: 'London', fullTimeEmployee: true, numberOfReports: 17}

// Define the printTeacherFunction interface
interface printTeacherFunction {
    (firstName: string, lastName: string): string
}

// Implement the printTeacher function
const printTeacher: printTeacherFunction = (firstName: string, lastName: string): string => {
    return `${firstName[0]}. ${lastName}`;
}

// Example usage
console.log(printTeacher('John', 'Doe')); // Output: J. Doe

// Define the interface for the class
interface StudentClassInterface {
    firstName: string;
    lastName: string;
    workOnHomework(): string;
    displayName(): string;
}

// Define the interface for the constructor
interface StudentClassConstructorInterface {
    new(firstName: string, lastName: string): StudentClassInterface;
}

// Implement the class
class StudentClass implements StudentClassInterface{
    firstName: string;
    lastName: string;

    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    workOnHomework(): string {
        return 'Currently working';
    }

    displayName(): string {
        return this.firstName;
    }
}

// Function to create a student
function createStudent(cStudent: StudentClassConstructorInterface, firstName: string, lastName: string): StudentClassInterface {
    return new cStudent(firstName, lastName);
}

const student1 = createStudent(StudentClass, 'Bukom', 'Banku');
console.log(student1.displayName()); // Output: Bukom
console.log(student1.workOnHomework()); // Output: Currently working
