const StudentService = require("./../../lib/services/StudentService");
const Reader = require("./../../lib/utils/Reader");

describe("Test suite for StudentService", () => {

    const sampleData = Reader.readJsonFile("./test/utils/sampleFile.json");

    test("Test getStudents500Credits static method", () => {

        const students500 = StudentService.getStudents500Credits(sampleData);

        expect(students500.length).toBe(2);
        expect(students500).toEqual(
            expect.arrayContaining(["Lucinda", "Phillips"]));

    });

    test("Test getCertifiedStudentEmail", () => {

        const studentEmails = StudentService.getCertifiedStudentEmail(sampleData);

        expect(studentEmails.length).toBe(3);
        expect(studentEmails).toEqual(expect.arrayContaining([
            "Sexton@visualpartnership.xyz",
            "Sharlene@visualpartnership.xyz",
            "Howell@visualpartnership.xyz"
        ]));
    });
});