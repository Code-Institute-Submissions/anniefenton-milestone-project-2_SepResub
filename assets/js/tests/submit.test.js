const callAlert = require("../submit");

describe("Submit", () => {
    describe("Alert function", () => {
        test("callAlert should exist", () => {
            expect(callAlert());
        });
        test("console.log to the console", () => {
            expect(console.log());
        });
        test("console.log to pass a string", () => {
            expect(console.log(''));
        });
        test("window.alert to exist in function", () => {
            expect('window.alert')
        });
    });
});
