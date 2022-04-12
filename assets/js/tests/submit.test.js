const alert = require("../submit");

describe("Submit", () => {
    describe("Alert function", () => {
        test("should return alert box when submit button is clicked", () => {
            expect(alertBox()).toBe(submit);
        })
    })
})