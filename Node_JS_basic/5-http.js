const fs = require('fs');
const http = require('http');

function readDatabase(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf-8', (error, data) => {
      if (error) {
        reject(new Error('Cannot load the database'));
        return;
      }

      const lines = data.split('\n').filter((line) => line.trim() !== '');
      const students = lines.slice(1);
      const fields = {};

      students.forEach((student) => {
        const [firstName, , , field] = student.split(',');

        if (!fields[field]) {
          fields[field] = [];
        }

        fields[field].push(firstName);
      });

      const output = [`Number of students: ${students.length}`];

      Object.keys(fields).forEach((field) => {
        const names = fields[field];
        output.push(`Number of students in ${field}: ${names.length}. List: ${names.join(', ')}`);
      });

      resolve(output.join('\n'));
    });
  });
}

const app = http.createServer((request, response) => {
  response.statusCode = 200;
  response.setHeader('Content-Type', 'text/plain');

  if (request.url === '/students') {
    response.write('This is the list of our students\n');

    readDatabase(process.argv[2])
      .then((report) => {
        response.end(report);
      })
      .catch((error) => {
        response.end(error.message);
      });
    return;
  }

  response.end('Hello Holberton School!');
});

app.listen(1245);

module.exports = app;
