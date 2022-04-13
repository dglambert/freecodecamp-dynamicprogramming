# howSum

## Problem

Write a function `howSum(targetSum, numbers)` that takes in a `targetSum` and an array of `numbers` as arguments. 

The function should return an array containing any combination of elements that add up to exactly the `targetSum`. If there is no combination that adds up to `targetSum`, then return null.

If there are multiple combinations possible, you may return any single one. 


## Solution

- **L** - Listen
- **E** - Examples
- **B** - Brute Force
- **O** - Optimize
    - **BUD**
        - **B** - Bottlenecks
        - **U** - Unnecessary work
        - **D** - Duplicate work
    - **DIY**
    - **Simplify & Generalize**
    - **Base Case & Build**
    - **Data Structure Brainstorm**
- **W** - Walkthrough
- **I** - Implement
- **T** - Test


### Listen 

- *"Any combination of elements that add up to exactly the `targetSum`."* - Does this mean I can reuse an element more thant once like in `canSum`?
    - ANSWER: Yes, duplicates are allowed.
- *"If there are multiple combinations possible, you may retrun any single one."* - I do not need to worry about getting best one or sorting.  


### Examples

`howSum_targetIs21numbersAre21_Returns21`
```
target: 21
numbers: [21]
21 = 21

// howSum(21, [21]) // [0]
```

`howSum_targetIs3numbersAre1_Returns1_1_1`
```
target: 3
numbers: [1]
3 = 1 + 1 + 1 
```

`howSum_targetIs21numbersAre20_1_Returns20_1`
```
target: 21
numbers: [20, 1]
21 = 20 + 1 

howSum(targetSum: number, givenNumbers: number[], usedNumbers: number[])

// howSum(21, [20, 1], []) 
    // howSum(1, [20, 1], [20]) 
        // howSum(-19, [20, 1], [20, 20]) // BASE_CASE: Negative Number, returns null
        // howSum(0, [20, 1], [20, 1]) // BASE_CASE: Zero, return userNumbers
    // howSum(20, [20, 1], [1])  
        // howSum(0, [20, 1], [20, 1]) // BASE_CASE: Zero, returns userNumbers
        // howSum(19, [20, 1], [1, 1]) 
            // howSum(-1, [20, 1], [1, 1, 20]) // BASE_CASE: Negative number, returns null
            // howSum(18, [20, 1], [1, 1, 1])
                // howSum(-2, [20, 1], [1, 1, 1, 20]) // BASE_CASE: Negative number, returns null
                // howSum(17, [20, 1], [1, 1, 1, 1]) 
                    ....
```

`howSum_targetIs5numbersAre2_3_7_Returns2_3`
```
target: 5
numbers: [2, 3, 7]
5 = 2 + 3
```
