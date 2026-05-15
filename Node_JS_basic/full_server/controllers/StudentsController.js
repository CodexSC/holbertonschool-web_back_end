import readDatabase from '../utils';

class StudentsController {
  static getAllStudents(request, response) {
    const database = process.argv[2];

    readDatabase(database)
      .then((fields) => {
        const lines = ['This is the list of our students'];
        const sortedFields = Object.keys(fields).sort((a, b) => a
          .toLowerCase()
          .localeCompare(b.toLowerCase()));

        sortedFields.forEach((field) => {
          const names = fields[field];
          lines.push(`Number of students in ${field}: ${names.length}. List: ${names.join(', ')}`);
        });

        response.status(200).type('text').send(lines.join('\n'));
      })
      .catch(() => {
        response.status(500).type('text').send('Cannot load the database');
      });
  }

  static getAllStudentsByMajor(request, response) {
    const major = request.params.major;

    if (major !== 'CS' && major !== 'SWE') {
      response.status(500).type('text').send('Major parameter must be CS or SWE');
      return;
    }

    const database = process.argv[2];

    readDatabase(database)
      .then((fields) => {
        const names = fields[major] || [];
        response.status(200).type('text').send(`List: ${names.join(', ')}`);
      })
      .catch(() => {
        response.status(500).type('text').send('Cannot load the database');
      });
  }
}

export default StudentsController;
