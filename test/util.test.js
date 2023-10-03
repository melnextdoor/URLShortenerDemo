const utils = require("../src/utils/Util");
const assert = require( "assert" );

describe( "utils", () => {
  describe("validate url", () => {
    it("Returns Error for Empty String", () => {
      assert.throws(() => utils.validateUrl(""))
    })

    it("Returns Error for an undefined String", () => {
      assert.throws(() => utils.validateUrl(undefined))
    })

    it("Returns an Error for incorrect URL format", () => {
      assert.throws(() => utils.validateUrl("www.googleca"))
    })
  })
});