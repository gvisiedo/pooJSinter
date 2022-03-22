const juan = {
    name:"juanito",
    age: 18,
    approvedCourses:["Curso 1"],
    addCourse(newCourse){
        this.approvedCourses.push(newCourse);
    }
};

console.log(Object.keys(juan));
console.log(Object.getOwnPropertyNames(juan));
console.log(Object.entries(juan));

Object.defineProperty(juan, "pruebaNASA", {
    value: "extraterrestres",
    writable:false,
    enumerable: false,
    configurable:false,
})

Object.defineProperty(juan, "navigator", {
    value: "Chrome",
    writable:true,
    enumerable: false,
    configurable:true,
})<

Object.defineProperty(juan, "editor", {
    value: "VSCode",
    writable:false,
    enumerable: true,
    configurable:true,
})

Object.defineProperty(juan, "terminal", {
    value: "WSL",
    writable:true,
    enumerable: true,
    configurable:false,
})

console.log(Object.getOwnPropertyDescriptors(juan));


