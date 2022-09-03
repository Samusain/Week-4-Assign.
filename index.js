//CREATE A PERSON OBJECT
//A person should have some characteristics.
//A person should be able to perform some functions

let person = new Object();
person.name = 'Julius Berger';
person.age = 18;
person.complexion = 'fair';
person.religion = 'Christianity';
person.biography = function(){
    return this.firstname+''+this.lastname;
}
person.read = function(){
    return 'Person reads to acquire knowledge.';
};

console.log('The name of my friend is '+ person.name +', '+ 'he is '+ person.age+ ' years old.');
console.log(person.religion);

//Assuming School is a place, attribute list of persons to a school, using the concept of inheritance.
class School{
    constructor(){
        this.name = 'Princeton College';
    };
};
class People extends School{
    constructor(person,age){
        super();
        this.person = person;
        this.age = age;
    }
}
let p1 = new People('Joel Joseph', 16);
let p2 = new People('Uzumaki Naruto', 18);
let p3 = new People('Mary Janet', 17);
console.log(p1.name +' - '+ p1.person +' '+p1.age);
console.log(p2.name +' - '+ p2.person +' '+p2.age);
console.log(p3.name +' - '+ p3.person +' '+p3.age);

