const fs = require('fs');

function countStudents(path) {
    try {
        const data = fs.readFileSync(path, 'utf-8');
        const lines = data.split('\n').filter((line) => line.trim() !== '');
        const students = lines.slice(1);

        if (students.length === 0) {
            throw new Error('Cannot load the database');
        }

        console.log(`Number of students: ${students.length}`);

        const fields = {};

        students.forEach((student) => {
            const [firstName, , , field] = student.split(',');

            if (!fields[field]) {
                fields[field] = [];
            }

            fields[field].push(firstName);
        });

        const sortedFields = Object.keys(fields).sort();

        for (const field of sortedFields) {
            const names = fields[field];
            console.log(`Number of students in ${field}: ${names.length}. List: ${names.join(', ')}`);
        }
    } catch (error) {
        console.error(error.message);
        throw new Error('Cannot load the database');
    }
}

// CALL THE FUNCTION with the CLI argument
countStudents(process.argv[2]);
