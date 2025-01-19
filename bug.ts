function compare(a: any, b: any): number {
  if (a < b) {
    return -1;
  } else if (a > b) {
    return 1;
  } else {
    return 0;
  }
}

const arr = [1, 2, '3', 4, 5];
arr.sort(compare); //Error: Argument of type '(a: any, b: any) => number' is not assignable to parameter of type '(a: number, b: number) => number'.