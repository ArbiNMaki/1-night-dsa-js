// This is a Data Structure
const studentsDatabase = ['jordan', 'erick', 'john', 'michael'];

// This is a Algorithm for finding a specific user
const findStudent = (allStudents, studentName) => {
    for (let i = 0; i < allStudents.length; i++) {
        if (allStudents[i] == studentName) {
            console.log(`Found ${studentName}`);
        }
    }
}

findStudent(studentsDatabase, 'erick');