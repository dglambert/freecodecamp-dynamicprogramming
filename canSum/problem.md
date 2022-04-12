# canSum

## Problem

Write a function `canSum(targetSum, numbers)` that takes in a `targetSum` and an array of `numbers` as arguments. 

The function should return a boolean indicating whether or not it is possible to generate the `targetSum` using `numbers` from the array.

You may use an element of the array as many times as needed.

You may assume that all input numbers are nonnegative. 

## Solution

- **L** - Listen
- **E** - Example
- **B** - Brute Force
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

Question: Are the elements of `numbers` unique?

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

`canSum_targetIs70numbersAre2,3,4,5_ReturnsTrue`
```
target: 70
numbers: 2,3,4,5
70 = 5*14
70 = 4*17+2
70 = 3*22+4
70 = 2*3
...
..
.
```

`canSum_targetIs13numbersAre2,4,7_ReturnsTrue`
```
target: 13
numbers: 2,4,7

Tree representation

// 13 [2, 4, 7]
    //-2// 11
        //-2// 9
            //-2// 7
            //-4// 5
            //-7// 2
        //-4// 7
            //-2// 5
            //-4// 3
            //-7// 0 :: BASE_CASE:EQUALS_ZERO, return true 
        //-7// 4
    //-4// 9
        //-2// 7
        //-4// 5
        //-7// 2
    //-7// 6
        //-2// 4
        //-4// 2
        //-7// -1 :: BASE_CASE:NEGATIVE_NUMBER, return false
```

### Brute Force

```
canSum(int targetNumber, int[] numbers)
{
    return canSum(targetNumber, numbers, 0);
}

canSum(int targetNumber, int[] numbers, int startIndex)
{
    for(let i = startIndex; i < numbers.length; i++;)
    {
        element = numbers[i];

        if(element > targetNumber)
        {
            continue;
        }

        if(targetNumber % element == 0)
        {
            return true;    
        }
        /// ???
        canSum(targetNumber, numbers, i+1);
    }
}

```