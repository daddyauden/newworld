import { sortWithWeight } from "../src/lib/array.extension";

describe("case 3", () => {
  it("#sortWithWeight()", function () {
    var input = "56 65 74 100 99 68 86 180 90";
    var output = "100 180 90 56 65 74 68 86 99";
    expect(sortWithWeight(input.split(" ")).join(" ")).toEqual(output);
  });
});
