const fs = require('fs');

function csvJSON(csv){

	let numberOfStudents = 0;

	let lines=csv.split("\n");

	let result = [];
	let fields = {};

	let headers=lines[0].split(",");

	for(let i=1;i<lines.length;i++){

		if (lines[i]) {
			let obj = {};
			let currentline=lines[i].split(",");

			for(let j=0;j<headers.length;j++){
				obj[headers[j]] = currentline[j];
				if (j == 3 && currentline[j] in fields) {
					fields[currentline[j]].push(currentline[0]);
				} else if(j == 3 && !(currentline[j] in fields)) {
					fields[currentline[j]] = [currentline[0]];
				}
			}
			result.push(obj);
			numberOfStudents++;
		}
	}

	console.log(`Number of students: ${numberOfStudents}`);
	for (const [key, value] of Object.entries(fields)) {
		const numberOfStudents = value.lenght;
		const listOfNames = value.join(",");
		console.log(`Number of students in ${key}: ${numberOfStudents}. List: ${listOfNames}`);
	}

	return JSON.stringify(result); //JSON
}

function countStudents(path){
	fs.readFile(path, 'utf8', function (err, data) {
		if (err) {
			throw new Error("Cannot load the database");
		}
		let numberOfStudents = 0;
		console.log(csvJSON(data));
	});
}

module.exports = countStudents;
