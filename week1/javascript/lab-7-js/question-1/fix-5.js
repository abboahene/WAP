// use the group object

let group = {

    title: "Our Group",

    students: ["John", "Pete", "Alice"],

    showList: function () {

        this.students.forEach(function (student) {

            console.log(group.title + ": " + student

            );

        });

    }

};
group.showList();