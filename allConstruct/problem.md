# allConstruct

## Problem

Write a function `allConstruct(target, wordBank)` that accepts a target string and an array of strings.

The function should return a 2D array containing **all of the ways** that the `target` can be constructed by concatenating elements of the `wordBank` array. Each element of the 2D array should represent one combination that constructs the `target`. 

You may reuse elements of `wordBank` as many times as needed. 


## Solution 

- **L** - Listen
- **E** - Examples
- **B** - Brute force 
- **O** - Optimize
    - **BUD** 
        - **B** - Bottleneck
        - **U** - Unnecessary work
        - **D** - Duplicate work
    - **DIY**
    - **Basecase and Build**
    - **Simplify and generalize**
    - **Datastructure brainstorm**
- **W** - Walkthrough
- **I** - Implement
- **T** - Test

### Listen


### Examples

`allConstruct_targetIsEmptyString_ReturnsEmpty2DArray`
```
```

`allConstruct_targetIsfooAndwordsArefoo_Returnsfoo`
```
```

`allConstruct_targetIsfooAndwordsAreEmptyArray_ReturnsNull`
```
```

`allConstruct_targetIsfooAndwordsAref_oo_Returnsf_oo`
```
```

`allConstruct_targetIsfooAndwordsArefo_o_f_Returnsfo_o__f_o_o`
```
```

### Brute Force

```
allConstruct(target, wordBank)
    if target is empty
        return [[]]

    matches : [][] = [][]

    foreach word in wordBank
        if target.IndexOf word == 0
            suffix = target starting at word.length
            constructed = allConstruct(suffix, wordBank)
            if(constructed is not null)
                add suffix to constructed[]
                add constructed to matches              
    return matches
```