function convertArgsToArray() {
  console.log(arguments);

  var arr = Array.prototype.slice.apply(arguments); // arguments.slice
  //var arr = [].slice.apply(arguments)
  
  console.log(arr);

  return arr;
}

convertArgsToArray(1,2,3,4,5);



/////////////////////////////////////////////////////////////////////

function Person(name) {
	this.name = name;
}

Person.prototype.doSomething = function(callback) {
	if (typeof callback == 'function') {
		callback.apply(this); // --------- 1
	}
};

function foo() {
	
	console.log(this.name); // --------- 2
	
}

var p = new Person('Lee');
p.doSomething(foo); 

