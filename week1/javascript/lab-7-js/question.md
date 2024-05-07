### Assignment Questions

1. using 5 ways to fix the errors which will print below in the console:


Our Group: John

Our Group: Pete

Our Group: Alice


let group = {

    title: "Our Group",

    students: ["John", "Pete", "Alice"],

    showList: function () {

        this.students.forEach(function (student) {

            console.log(this.title + ": " + student

            );

        });

    }

};

group.showList();


2.  In the code below there’s a setTimeout call scheduled, then a heavy calculation is run, that takes more than 100ms to finish.

When will the scheduled function run?

After the loop.
Before the loop.
In the beginning of the loop.
What is console.log going to show?

let i = 0;

setTimeout(() => console.log(i), 100); // ?

// assume that the time to execute this function is >100ms

for(let j = 0; j < 100000000; j++) {

  i++;

}