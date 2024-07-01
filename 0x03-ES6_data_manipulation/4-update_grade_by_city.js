/**
 * Updates the grades of a list of students in a given city.
 * @param {{ id: Number, firstName: String, location: String }[]} students - The list of students.
 * @param {String} city - The city of students.
 * @param {{ studentId: Number, grade: Number }[]} newGrades - The new grades to be given to students.
 * @author Zerihun Shiferaw <https://github.com/Zed-bard>
 * @returns {{id: Number, firstName: String, location: String}[]}
 */
export default function updateStudentGradeByCity(students, city, newGrades) {
  const defaultGrade = { grade: 'N/A' };

  // Validate newGrades type (optional, but good practice)
  if (!Array.isArray(newGrades)) {
    throw new Error('newGrades must be an array of objects with studentId and grade properties');
  }

  // Create a lookup object for efficient grade retrieval
  const gradeLookup = newGrades.reduce((acc, { studentId, grade }) => {
    acc[studentId] = grade;
    return acc;
  }, {});

  return students
    .filter((student) => student.location === city)
    .map((student) => ({
      id: student.id,
      firstName: student.firstName,
      location: student.location,
      grade: gradeLookup[student.id] || defaultGrade.grade,
    }));
}
