import { sortWithWeight } from "./lib/array.extension";
import { replaceLastNumber, romeToInt } from "./lib/string.extension";

const input1: string = "F3f213h82r4";
const output1: string = "F3f21*h**r*";

console.log(
  `${input1} should be covert to ${output1}: `,
  replaceLastNumber(input1) === output1 ? "Yes" : "No"
);

const input2: string = "56 65 74 100 99 68 86 180 90";
const output2: string = "100 180 90 56 65 74 68 86 99";

console.info(
  `${input2} should be covert to ${output2}: `,
  sortWithWeight(input2.split(" ")).join(" ") === output2 ? "Yes" : "No"
);

const input3: string = "MCMXC";
const output3: number = 1990;

console.info(
  `${input3} should be covert to ${output3}: `,
  romeToInt(input3) === output3 ? "Yes" : "No"
);
