console.log('Hello, Parth!');

//object literal
var student ={
    name: 'John',
    age: 20,
    city:  'New York'
}

console.log(student)
console.log( student.name)
console.log(typeof  student)


//in gives value and of gives index

for(let key in student){
    console.log(key)
    console.log(student[key])
}

for(let key in student){
    console.log(`${key} ->${student}`)
}

var emp ={
    empId: 1,
    empName: 'John',
    empAge: 20,
    empCity: 'New York'
}

//object destructuring
var {empId,empName,empAge,empCity} = emp
console.log(empId)
var result = "Pass"

var newEmp ={
    empId: 2,
    empName: 'John',
    empAge: 20,
    empCity: 'New York',
    result

}

console.log(newEmp)

// var emp1={
//     ...emp,
//     result
// }

