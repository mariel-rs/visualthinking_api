const StudentController = require("./../../lib/controllers/StudentController");

describe("Test suite for StudentController", () => {

    test("Test reading student data", () => {

        const students = StudentController.getStudents();

        // The file should have information
        expect(students.length).not.toBe(0);
    });

    test("Test getCertifiedStudentEmails", () => {

        const certifiedStudentEmails = StudentController.getCertifiedStudentEmails();

        console.log(certifiedStudentEmails.length);

        // Verify the list contains the emails of two (sample) certified students
        expect(certifiedStudentEmails).toEqual(
            expect.arrayContaining([
                "Antoinette@visualpartnership.xyz",
                "Juliette@visualpartnership.xyz"
            ]));
        
        // This particular student DB has 29 certified students
        // If this value changes, update this unit test 
        expect(certifiedStudentEmails.length).toBe(29);
    });
});