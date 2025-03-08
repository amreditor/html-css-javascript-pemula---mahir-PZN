let person = {
    name: "adam",
    semester: 6,
    usia: "not found"
}

for(let property in person){
    console.log(`property ${property}: ${person[property]}`)
}