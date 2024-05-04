
### Assignment Questions

1. Create a function using function declaration named sum with one parameter of Array type, the
returned result is the sum of all elements which are greater than 20.

2. Create a function using function expression named getNewArray with one parameter of String
Array, return a new array which contains all string, length is greater than and equal to 5, and
contains letter ‘a’.

3. Implement an arrow function with feature below:

concat('hi', [1,2,3], ['Hello','world']) -> return result: ['h', 'i', 1,2,3, 'Hello','world']

4.  For the given students array below, compute the average grade of all students who took cs303 course which returns an object which key is students' names, values is the average.

Example of result:

```
{

 Quincy: 93.5,

 Sam: 86.5,

 Katie: 71.5

}
```

> You're not allowed to use for, while, do...while, for..of, forEach loop

```
const students = [

  { name: 'Quincy', grades: [99, 88], courses:['cs301', 'cs303']},

  { name: 'Jason', grades: [29, 38], courses:['cs201', 'cs203']},

  { name: 'Alexis', grades: [79, 78], courses:['cs105', 'cs211'] },

  { name: 'Sam', grades: [91, 82], courses:['cs445', 'cs303'] },

  { name: 'Katie', grades: [66, 77], courses:['cs303', 'cs477'] }

];
```