// Destructuring
// Used with both objects and arrays
// Here: Object destructuring

const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "Daksh"
};


// Normal property access
console.log(course.courseInstructor);


// Object destructuring
// Property name and variable name are the same
const { courseInstructor } = course;
console.log(courseInstructor);

// WORKING:
// JavaScript sees courseInstructor inside { } and looks for a property with that exact name in course.
// Take the courseInstructor property from course and create a variable called courseInstructor.
// is equivalent to: const courseInstructor = course.courseInstructor;


// Destructuring with a custom variable name
// coursename -> property name
// cn        -> new variable name
const { coursename: cn } = course;
console.log(cn);

// WORKING:
// Take the coursename property and store its value in a new variable called cn
// is equivalent to: const cn = course.coursename;


// API
// api in json format
// { 
//     name: "Daksh",
//     coursename: "js in hindi", 
//     price: "free"
// }


// api in array format
[
    {},
    {},
    {}
]
