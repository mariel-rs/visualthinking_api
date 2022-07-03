const Reader = require("./../utils/Reader");
const StudentService = require("./../services/StudentService");

class StudentController{

    static getStudents(){

        const studentRecord = Reader.readJsonFile("students.json");

        return studentRecord;
    }

    static getCertifiedStudentEmails(){

        const allStudents = this.getStudents();
        const certifiedStudentEmail = StudentService.getCertifiedStudentEmail(allStudents);

        return certifiedStudentEmail;
    }

    static getStudents500(){

        const allStudents = this.getStudents();
        const students500 = StudentService.getStudents500Credits(allStudents);

        return students500;
    }

}

module.exports = StudentController;