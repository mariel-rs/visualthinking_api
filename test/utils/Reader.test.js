const Reader = require("./../../lib/utils/Reader");

describe("Test suite for the Reader class", () => {

    test("Open json file with students information", () => {

        const jsonFile = Reader.readJsonFile("./test/utils/sampleFile.json");

        // Verify number of objects and object keys
        expect(jsonFile.length).toBe(4);
        expect(Object.keys(jsonFile[0])).toEqual(
            expect.arrayContaining([
                "id", "name", "email", "credits", "enrollments", 
                "previousCourses", "haveCertification"
            ]));
    });
});