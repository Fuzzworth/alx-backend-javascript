const fs = require('fs');

function csvJSON(csv) {
  let numberOfStudents = 0;

  const lines = csv.split('\n');

  const result = [];
  const fields = {};

  const headers = lines[0].split(',');

  for (let i = 1; i < lines.length; i++) {
    if (lines[i]) {
      const obj = {};
      const currentline = lines[i].split(',');

      for (let j = 0; j < headers.length; j++) {
        obj[headers[j]] = currentline[j];
        if (j == 3 && currentline[j] in fields) {
          fields[currentline[j]].push(currentline[0]);
        } else if (j == 3 && !(currentline[j] in fields)) {
          fields[currentline[j]] = [currentline[0]];
        }
      }
      result.push(obj);
      numberOfStudents += 1;
    }
  }

  console.log(`Number of students: ${numberOfStudents}`);
  for (const [key, value] of Object.entries(fields)) {
    const numberOfStudents = value.length;
    const listOfNames = value.join(', ');
    console.log(`Number of students in ${key}: ${numberOfStudents}. List: ${listOfNames}`);
  }
}

function countStudents(path) {
  fs.readFile(path, 'utf8', (err, data) => {
    if (err) {
      throw new Error('Cannot load the database');
    }
    const numberOfStudents = 0;
    csvJSON(data);
  });
}

module.exports = countStudents;
