# countConstruct

## Problem

Write a function `countConstruct(target, wordBank)` that accepts a target string and an array of strings.   

The function should return the **number of ways** that the `target` can be constructed by concatenating elements of the `wordBank` array.

You may reuse elements of `wordBank` as many times as needed.

## Solution 

- **L** - Listen
- **E** - Examples
- **B** - Brute force
- **O** - Optimize
    - **BUD** 
        - **B** - Bottlenecks
        - **U** - Unnecessary work
        - **D** - Duplicate work
    - **DIY**
    - **Base Case and Build**
    - **Simplify and Generalize**
    - **Data Structure brainstorm**
- **W** - Walkthrough
- **I** - Implement
- **T** - Test

### Listen



### Examples

`countConstruct_targetIsfooAndwordsAreEmpty_Returns0`
```
```

`countConstruct_targetIsEmptyString_Returns1`
```
```

`countConstruct_targetIsfooAndwordsArefoo_Returns1`
```
```

`countConstruct_targetIsfooAndwordsAref_oo_Returns1`
```
```

`countConstruct_targetIsfooAndwordsAref_oo_fo_o_Returns3`
```
```

### Brute Foce 

```
m = target length
n = word bank length
time complexity: O((n^m)*m)
space complexity: O(m^2)
```

```
countConstruct(target, wordBank)
    if target length is 0
        return 1
    
    count = 0

    for each word in wordbank
        if target starts with word
            remainder equals target - word
            count = count + countConstruct(remaineder, wordBank)
    
    return count
```

### Optimize

Focus on the exponential bottle neck `O((n^m)*m)` in Brute Force solution. 
- Reduce recursion w/ memoization - `est: O(n*m^2)`



