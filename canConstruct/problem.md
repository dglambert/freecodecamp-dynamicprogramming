# canConstruct

## Problem

Write a function `canConstruct(target, wordBank)` that accepts a target string and an array of strings.

The function should return a `boolean` indicating whether or not the `target` can be constructed by concatenating elements of the `wordBank` array. 

You may reuse elements of `wordBank` as many times as needed. 

## Solution

- **L** - Listen
- **E** - Example
- **B** - Brute Force
- **O** - Optimize
    - **BUD** 
        - **B** - Bottleneck
        - **U** - Unnecessary work 
        - **D** - Duplicate work
    - **DIY**
    - **Base Case and Build**
    - **Simplify and Generalize**
    - **Data structure brainstorm**
- **W** - Walkthrough
- **I** - Implement
- **T** - Test


### Listen


### Examples

`canConstruct_targetIsFooAndwordsAreFoo_ReturnsTrue`
```
```

`canConstruct_targetIsFooFooAndwordsAreFoo_ReturnsTrue`
```
```

`canConstruct_targetIsFooBarAndwordsAreFoo_ReturnsFalse`
```
```

`canConstruct_targetIsFooBarAndwordsAreFoo_Bar_ReturnsTrue`
```
```


### Brute Force

```
canConstruct(target, wordBank)
{
    if(target.length == 0)
        return ""

    foreach word in wordbank
        if(target contains word)
            target = remove word in target
            return canConstruct(target, wordBank)

}
```


### Optimize

Focus on the exponential bottle neck `O((n^m)*m)` in Brute Force solution. 
- Reduce recursion w/ memoization