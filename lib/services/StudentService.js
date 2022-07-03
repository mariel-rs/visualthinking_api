class StudentService{

    static getCertifiedStudentEmail(students){

        const certStudents = students.filter((student) => student.haveCertification == true);
        const certStudentEmails = certStudents.map((certStudent) => certStudent.email);
        
        return certStudentEmails;
    }

    static getStudents500Credits(students){

        const students500 = students.filter((student) => student.credits >= 500);
        const studentNames500 = students500.map((student500) => student500.name);
        
        return studentNames500;
    }

}

module.exports = StudentService;