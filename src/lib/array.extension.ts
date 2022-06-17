import { getWeight } from "./string.extension";

const sortWithWeight = function (arr: string[]): string[] {
  const compareFn = (a: string, b: string): number => {
    // get weight from string, eg: 110 => 2, 78 => 15
    const factor1: number = getWeight(a);
    const factor2: number = getWeight(b);
    if (factor1 - factor2 < 0) return -1;
    else if (factor1 === factor2) return 0;
    else return 1;
  };

  return arr.sort(compareFn);
};

export { sortWithWeight };
