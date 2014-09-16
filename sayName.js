//Create a Person constructor that accepts name and age as parameters and sets those properties accordingly in the Constructor.

var Person = function(name, age) {
	this.name = name;
	this.age = age;
}


//Now create three instances of Person with data you make up

var jacob = new Person('Jacob', 21)
var johnny = new Person('Johnny', 27)
var israel = new Person('Israel', 32)


//Now add a sayName method on your Person class that will alert the name of whatever Person instance called it.

Person.prototype.sayName = function() {
	alert("Hello!  My name is " + this.name + " .");
}