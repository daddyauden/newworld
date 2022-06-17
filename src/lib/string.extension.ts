const replaceLastNumber = function (
  str: string,
  replacement: string = "*",
  loops: number = 4
): string {
  const len: number = str.length - 1;

  for (var i: number = len, times: number = 0; i >= 0; i--) {
    // check character is a number and replace with replacement
    if (!isNaN(parseInt(str[i]))) {
      times++;
      str = str.substring(0, i) + replacement + str.substring(i + 1);
    }

    // when arrive loops, break for loop
    if (times === loops) break;
  }

  return str;
};

const getWeight = function (str: string): number {
  let sum = 0;

  // split string to array, then sum every element
  str.split("").forEach((i: string) => {
    sum += parseInt(i);
  });

  return sum;
};

const romeToInt = function (str: string): number {
  const reflactTable: { [name: string]: number } = {
    M: 1000,
    D: 500,
    C: 100,
    L: 50,
    X: 10,
    V: 5,
    I: 1,
  };

  let sum = 0;

  for (var i = 0, len = str.length; i < len; i++) {
    const value = reflactTable[str[i]];

    // IV == -1+5 == 4, VI == 5+1 == 6;  compare second index element to previous element, if less, need add, otherwise minus
    if (value < reflactTable[str[i + 1]]) {
      sum -= value;
    } else {
      sum += value;
    }
  }

  return sum;
};

export { replaceLastNumber, getWeight, romeToInt };
