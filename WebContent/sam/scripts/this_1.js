var obj1 = {
  name: 'Lee',
  sayName: function() {
    console.log(this.name, this);
  }
}

var obj2 = {
  name: 'Kim'
}

obj2.sayName = obj1.sayName;

obj1.sayName();
obj2.sayName();

/////////////////////////////////////////////////////////

function foo() {
	console.log("foo's this: ", this);
	function bar() {
		console.log("bar's this: ", this);
	}
	bar();
}
foo();

