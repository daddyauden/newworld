const { replaceLastNumber, romeToInt } = require("../src/lib/string.extension");

describe("case 1", () => {
  it("#replaceLastNumber()", function () {
    var input = "F3f213h82r3";
    var output = "F3f21*h**r*";
    expect(replaceLastNumber(input)).toEqual(output);
  });
});

describe("case 2", () => {
  it("#romeToInt()", function () {
    var input = "MCMXC";
    var output = 1990;
    expect(romeToInt(input)).toEqual(output);
  });
});
