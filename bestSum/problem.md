# bestSum

## Problem

Write a function `bestSum(targetSum, numbers)` that takes in a `targetSum` and an array of `numbers` as arguments.

The function should return an array containing the shortest combination of numbers that add up to exactly the `targetSum`.

If there is a tie for the shortest combination, you may return any one of the shortest. 

## Solution

- **L** - Listen
- **E** - Example
- **B** - Brute Force
- **O** - Optimize
    - **BUD** 
        - **B** - Bottlenecks
        - **U** - Unnecessary work
        - **D** - Duplicate work
    - **DIY** - 
    - **Simplify and Generalize** - 
    - **Base Case and Build** - 
    - **Data structure Brainstorm** - 
- **W** - Walkthrough
- **I** - Implement
- **T** - Test

### Listen

- "Best" - May need to presort the incoming data structure for better performance.  
- On seeing the tree drawing, if we use BFS, not DFS, then we can stop at the level we find a match. 

### Example

`bestSum_targetIs-1AndnumbersAre1_ReturnsNull`
```
```

`bestSum_targetIs0AndnumbersAre1_ReturnsEmptyArray`
```
```

`bestSum_targetIs7AndnumbersAre7_Returns7`
```
// 0 == 0 // false
    // 7 - 7 == 0 // true 
```

`bestSum_targetIs3AndnumbersAre1_Returns1_1_1`
```
// 0 == 0 // false
    // 3 - 1 == 0 // false
        // 2 - 1 == 0 // false
            // 1 - 1 == 0 // true, [1], store [1] as best.  
    // 3 - 1 == 0 // false
        // 2 - 1 == 0 // false
            // 1 -1 == 0 // true, [1], if this.length < best.length, then best = this 
    // 3 - 1 == 0 // false
        // 2 - 1 == 0 // false
            // 1 -1 == 0 // true, [1], if this.length < best.length, then best = this 
```

`bestSum_targetIs7AndnumbersAre7_1_Returns7`
```
// 0 == 0 // false
    // 7 - 7 == 0 // true, [7], store [7] as best
    // 7 - 1 == 0 // false
        // 6 - 7 == 0 // BASE CASE: NEGATIVE 
        // 6 - 1 == 0 // false
            // 5 - 7 == 0 // BASE CASE: NEGATIVE
            // 5 - 1 == 0 // false
                // 4 - 7 == 0 // BASE CASE: NEGATIVE
                // 4 - 1 == 0 // false
                    // 3 - 7 == 0 // BASE CASE: NEGATIVE
                    // 3 - 1 == 0 // false
                        // 2 - 7 == 0 // BASE CASE: NEGATIVE
                        // 2 - 1 == 0 // false
                            // 1 - 1 == 0 // true, [1, 1, 1, 1, 1, 1, 1], if this.length < best.length, then best = this
```

`bestSum_targetIs7AndnumbersAre1_7_Returns7`
```
// 0 == 0 // false
    // 7 - 1 == 0 // false
        // 6 - 1 == 0 // false
            // 5 - 1 == 0 // false
                // 4 - 1 == 0 // false
                    // 3 - 1 == 0 // false
                        // 2 - 1 == 0 // false
                            // 1 - 1 == 0 // true, [1, 1, 1, 1, 1, 1, 1], if this.length < best.length, then best = this
                        // 2 - 7 == 0 // BASE CASE: NEGATIVE
                    // 3 - 7 == 0 // BASE CASE: NEGATIVE
                // 4 - 7 == 0 // BASE CASE: NEGATIVE
            // 5 - 7 == 0 // BASE CASE: NEGATIVE
        // 6 - 7 == 0 // BASE CASE: NEGATIVE 
    // 7 - 7 == 0 // true, [7], store [7] as best
```


### Brute Force
 see `bestSum.ts bruteForceBestSum()`

 
 
 ### Optimize

Given a O((n^m)*m) for `bruteForceBestSum()`, the focus is on the exponential time as notated by `^m`.

1. On possible solution is to do BFS vs DFS, to limit the recursion.
2. Another posible solutions is to Memoization. 

