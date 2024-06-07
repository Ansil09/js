// const tinderUser = new Object()  //singleton obj

const tinderUser ={}  // Non- singleton obj

tinderUser.id = "1233asb"
tinderUser.name = "sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser ={
    email: "some@gmail.com",
    fullname: {
        userfullname:{
            firstname: "ansil",
            lastname: "shah"
        }
    }
}
// console.log(regularUser.fullname);
// console.log(regularUser.fullname.userfullname.firstname);


const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = {obj1, obj2}
// const obj3 = Object.assign({}, obj1, obj2, obj4)

// sprid*********
const obj3 = {...obj1, ...obj2}
// console.log(obj3);


const users = [
    {
        id: 1,
        email: "a@gmail.com"
    },
    {   
    },
    {
    },
]

users[1].email
// console.log(tinderUser);
// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoggedIn'));

const course = {
    coursename: "java",
    price: 999,
    courseInstructor: "ansil"
}

// console.log(course.courseInstructor); 
        // OR descrtucture
const {courseInstructor: instructor} = course
// console.log(courseInstructor);
console.log(instructor);

// destructure
// const navbar = ({company}) => {

// }
// navbar(company = "ansil")

// ***********JSON************
{
    name: "ansil",
    age: 34,
    email: "a@google.com"
}