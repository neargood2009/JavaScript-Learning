// define a student object
const student = {
    fullName: "Rahul Kumar",
    age: 20,
    cgpa: 8.2,
    isPass: true
}

// print the student object and its type
console.log(student)
console.log(typeof student)

// to access a key in student object
console.log(student["fullName"])
console.log(student.fullName)

console.log(student["cgpa"])
console.log(student.cgpa)

// to change value of a key in student object
student["age"]=student["age"] + 1
console.log(student["age"])

// Practice Q1
/*
Product
- productName string
- rating number (1 to 5)
- price number
- offer number (1 to 100)
*/

const product = {
    productName: "Parker Pen",
    rating: 4,
    price: 285,
    offer: 5
}

// to print product details
console.log(product)


// Practice Q2
/*
Profile
- username string
- followers number
- following number
- posts number
*/

const profile = {
    username: "@johndoe",
    followers: 1000,
    following: 875,
    posts: 50
}

// to print profile detaisls
console.log(profile)

// to print type of profile
console.log(typeof profile)

// to print type of username in profile
console.log(typeof profile["username"])