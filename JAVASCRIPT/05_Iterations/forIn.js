// for in loop

const myObject = {
    js: 'javascript',
    cpp: 'C++', 
    java: 'Java',
    rb: 'ruby'
}

for (const key in myObject) {
    console.log(`${key} shortcut is for ${myObject[key]}`);
}


const programming = ['cpp', 'java', 'js', 'sql'];

for (const lang in programming) {
    // console.log(lang);                 // gives indices just
    console.log(programming[lang]);
}


const map = new Map();  
map.set('IN', "India");
map.set('USA', "United States of America");
map.set('Fr', "France");
map.set('Fr', "French"); // overwrites the previous value of 'Fr' key


for (const [key, value] in map) {          // Not iterable*********
    console.log(key, value);    
} 



// forof doesn't iterate over objects
// forin doesn't iterate over map