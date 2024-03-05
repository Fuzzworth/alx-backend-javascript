const fs = require('fs');

function countStudents(path){
	fs.readFile(path, 'utf8', function (err, data) {
		if (err) {
			throw new Error("Cannot load the database");
		}
		let numberOfStudents = 0;
		for (const line of data) {
			console.log(line);
		}
	});
}

module.exports = countStudents;
