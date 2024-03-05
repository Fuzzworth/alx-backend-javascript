const fs = require('fs');

function countStudents(path){
	fs.readFile(path, function (err, data) {
		if (err) {
			throw new Error("Cannot load the database");
		}
		let numberOfStudents = 0;
		console.log(data);
	});
}
