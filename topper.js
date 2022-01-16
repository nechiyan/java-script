let students = [
    {
        name: "std1",
        class: 1,
        division: "D",
        marks:[10,15,22,25,20],
    },
    {
        name: "std2",
        class: 1,
        division: "D",
        marks:[100,15,22,15,10],
    },
    {
        name: "std3",
        class: 1,
        division: "D",
        marks:[20,35,22,25,20],
    },
    {
        name: "std4" ,
        class: 1,
        division: "D",
        marks:[30,5,22,25,20],
    }
]

let topper_name="";
let topper_mark=0;

students.forEach((student) => {
    total=0;
    student.marks.forEach((mark) => {
        total+=mark;
        console.log(mark);
        if (topper_mark<total){
            topper_mark=total;
        }
    });
});
console.log("Topper Student :",topper_name);
console.log("Totalmark :",topper_mark);