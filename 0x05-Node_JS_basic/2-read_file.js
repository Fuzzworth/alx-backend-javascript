const fs = require('fs');

function csvJSON(csv){

	let numberOfStudents = 0;

	let lines=csv.split("\n");

	let result = [];

	let headers=lines[0].split(",");

	for(let i=1;i<lines.length;i++){

		if (lines[i]) {
			let obj = {};
			let currentline=lines[i].split(",");

			for(let j=0;j<headers.length;j++){
				obj[headers[j]] = currentline[j];
			}
			result.push(obj);
			numberOfStudents++;
		}
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
