//function contructor

var carlos={
	name:'carlos',
	yearofbirth:1995,
	job:'teacher'
};

var Person = function(name,yearofbirth,job){
this.name= name;
this.yearofbirth= yearofbirth;
this.job=job;
this.calculateAge=function(){
	console.log(2016-this.yearofbirth)
};

Person.prototype.lastName = 'vizcaino';

}

var carlos = new Person('carlos',1995,'teacher');
var gabriel = new Person('gabriel', 1994,'player');
var juan = new Person('juan',1990,'futbollista');


carlos.calculateAge();
gabriel.calculateAge();
juan.calculateAge();


console.log(carlos.lastName);
console.log(gabriel.lastName);
console.log(juan.lastName);