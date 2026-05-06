export default function updateStudentGradeByCity(students, city, newGrades) {
    if (!Array.isArray(students)) {
        return [];
    }

    const grades = Array.isArray(newGrades) ? newGrades : [];

    return students
        .filter((student) => student.location === city)
        .map((student) => {
            const match = grades.find((grade) => grade.studentId === student.id);
            const grade = match ? match.grade : 'N/A';
            return { ...student, grade };
        });
}
