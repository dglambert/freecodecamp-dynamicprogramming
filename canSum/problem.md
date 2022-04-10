# canSum

## Problem

Write a function `canSum(targetSum, numbers)` that takes in a `targetSum` and an array of `numbers` as arguments. 

The function should return a boolean indicating whether or not it is possible to generate the `targetSum` using `numbers` from the array.

You may use an element of the array as many times as needed.

You may assume that all input numbers are nonnegative. 

## Solution

- **L** - Listen
- **E** - Example
- **B** - Bruteforce
- **O** - Optimize
  - **BUD** 
    - **B** - Bottlenecks
    - **U** - Unnecessary Work
    - **D** - Duplicate Work
  - **DIY** 
  - **Simplify & Generalize**
  - **Base Case & Build**
  - **Data Structure Brainstorm**
- **W** - Walkthrough
- **I** - Implement
- **T** - Test

### Listen 

n/a

### Example

`canSum_targetIs21numbersAre21_ReturnsTrue`
```
target: 21
numbers: 21
21 = 21
```

`canSum_targetIs9numbersAre1_ReturnsTrue`
```
target: 9
numbers: 1
9 = 1+1+1+1+1+1+1+1+1
```

`canSum_targetIs6numbersAre2_3_ReturnsTrue`
```
target: 6
numbers: 2,3
6 = 2+2+2
6 = 3+3
```

`canSum_targetIs7numbersAre2_3_ReturnsTrue`
```
target: 7
numbers: 2,3
7 = 3+2+2
```

`canSum_targetIs7numbersAre3_ReturnsFalse`
```
target: 7
numbers: 3
n/a
```

`canSum_targetIs7numbersAre2_ReturnsFalse`
```
target: 7
numbers: 2
n/a
```
