interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

const student1: Student = {
    firstName: "KOJO",
    lastName: "OJOK",
    age: 10,
    location: "JOOK"
}
const student2: Student = {
    firstName: "NII",
    lastName: "IIN",
    age: 20,
    location: "INI"
}

const studentsList: Student[] = [student1, student2]

// Render table using Vanilla JS
const table = document.createElement('table');
const tbody = document.createElement('tbody');

studentsList.forEach(student => {
    const row = document.createElement('tr');
    const cell1 = document.createElement('td');
    const cell2 = document.createElement('td');
    cell1.textContent = student.firstName;
    cell2.textContent = student.location;
    
    // styling the table so i can see it
    cell1.style.border = "2px solid black"
    cell2.style.border = "2px solid black"
    cell1.style.padding = "2px"
    cell2.style.padding = "2px"

    // append cell to row and then row to body
    row.appendChild(cell1);
    row.appendChild(cell2);
    tbody.appendChild(row);



});

table.appendChild(tbody);
document.body.appendChild(table);