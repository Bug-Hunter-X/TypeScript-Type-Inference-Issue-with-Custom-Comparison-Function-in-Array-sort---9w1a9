# TypeScript Type Inference Issue with Custom Comparison Function

This repository demonstrates a subtle type inference issue in TypeScript when using a custom comparison function with `Array.sort()`. The issue arises when the array contains mixed data types and the comparison function doesn't explicitly handle all possible types.