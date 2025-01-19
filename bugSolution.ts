function compare(a: any, b: any): number {
  // Explicit type checking and handling
  if (typeof a === 'number' && typeof b === 'number') {
    return a - b; // Numerical comparison
  } else if (typeof a === 'string' && typeof b === 'string') {
    return a.localeCompare(b); // String comparison
  } else {
    // Handle other type combinations or throw error
    console.error('Unsupported comparison:', typeof a, typeof b);
    return 0; // Or throw an error
  }
}

const arr = [1, 2, '3', 4, 5];
arr.sort(compare); // Works correctly now