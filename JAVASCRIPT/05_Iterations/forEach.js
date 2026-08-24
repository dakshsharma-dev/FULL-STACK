const coding = ['java', 'cpp', 'js', 'ruby'];

coding.forEach(function (lang) {
    console.log(lang);
})


// using arrow function () => {}
// this '() => {}' is called callback
coding.forEach( (lang) => {          
    console.log(lang);
})


function printMe(item){
    console.log(item);
}
coding.forEach(printMe);         // only give reference of function, don't execute it.


coding.forEach((item, index, arr) => {
    console.log(item, index, arr);
});


const myCoding = [
    {
        languageName: 'Javascript',
        languageFileName: 'js'
    },
    {
        languageName: 'Java',
        languageFileName: 'java'
    },
    {
        languageName: 'C++',
        languageFileName: 'cpp'
    },
]


myCoding.forEach( (item) => {
    console.log(item.languageName);
    console.log(item.languageFileName);
})