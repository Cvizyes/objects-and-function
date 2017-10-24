//function contructor

// var carlos={
// 	name:'carlos',
// 	yearofbirth:1995,
// 	job:'teacher'
// };

// var Person = function(name,yearofbirth,job){
// this.name= name;
// this.yearofbirth= yearofbirth;
// this.job=job;
// this.calculateAge=function(){
// 	console.log(2016-this.yearofbirth)
// };

// Person.prototype.lastName = 'vizcaino';

// }

// var carlos = new Person('carlos',1995,'teacher');
// var gabriel = new Person('gabriel', 1994,'player');
// var juan = new Person('juan',1990,'futbollista');


// carlos.calculateAge();
// gabriel.calculateAge();
// juan.calculateAge(); 


// console.log(carlos.lastName);
// console.log(gabriel.lastName);
// console.log(juan.lastName);  


// var personProto = {
// 	calculateAge:function(){
// 		console.log(2016-this.yearofBirth-this.yearofbirth)

// 	}
// };

// var carlos = Object.create(personProto);
// carlos.name='carlos';
// carlos.yearofbirth=1995;
// carlos.job='teacher';

// var juan = Object.create(personProto,{

// 	name:{value: 'juan'},
// 	yearofbirth: { value: 1998},
// 	job:{value: 'programmer'}

// })




//primitives vs objects


//primitives
var a = 23;
var b = a;
a = 46;
console.log(a);
console.log(b);




//objects
var obj1={
	name:'carlos',
	age:22
};
var obj2 = obj1;
obj1.age=38;
console.log(obj1.age);
console.log(obj2.age);


//functions
var age= 23;
var obj={
	name:'juan',
	city:'lisbon'
};
function change(a,b){
	a=30;
	b.city= 'san francisco';
}

change(age, obj);

console.log(age);
console.log(obj.city);







