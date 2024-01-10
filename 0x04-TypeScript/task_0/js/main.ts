interface Student {
  firstName : string;
  lastName : string;
  age : number;
  location : string;
}

const student1: Student = {
  firstName: "Nyangasi",
  lastName: "Mhozya",
  age: 88,
  location: "Gaborone",
};

const student2: Student = {
  firstName: "Fuzzy",
  lastName: "Foo",
  age: 88,
  location: "Internet",
};

// Render table using Vanilla Javascript
const studentsList: Student[] = [student1, student2];

// Render table using Vanilla Javascript
const table = document.createElement("table");

// Append a new row for each student in the array
studentsList.forEach((student) => {
  const row = document.createElement("tr");
  const firstNameCell = document.createElement("td");
  const locationCell = document.createElement("td");
  firstNameCell.textContent = student.firstName;
  locationCell.textContent = student.location;
  row.appendChild(firstNameCell);
  row.appendChild(locationCell);
  table.appendChild(row);
});

// Append the table to the body of the document
document.body.appendChild(table);
