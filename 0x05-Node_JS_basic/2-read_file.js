const fs = require('fs');
const csv = require('csv-parser');

function countStudents(csvFile) {
  try {
    const data = [];
    fs.createReadStream(csvFile)
      .pipe(
        parse({
          delimiter: ",",
	  columns: true,
	  ltrim: true,
	})
      )
      .on("data", function(row) {
        data.push(row);
      })
    console.log(`Number of students: ${data.length}`);
  }
  catch (error) {
    throw new Error("Cannot load the database")
  }
}

module.exports = countStudents;
