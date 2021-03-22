import { isValidURL } from "../js/nameChecker"

describe("Testing isValidURL", () => {
  test("invalid URL", () => {
      expect(isValidURL("test")).toBe(false);
})

  test("valid URL", () => {
    expect(isValidURL("https://www.nytimes.com/2021/03/19/us/florida-senate-race-fraud.html")).toBe(true);
  })

});
