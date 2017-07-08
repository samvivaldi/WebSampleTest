var value = 1;

var obj = {
	value : 100,
	foo : function() {
		console.log("foo's this: ", this); // this 는 어느객체?
		console.log("foo's this.value: ", this.value);
		var t = this;
		function bar() {
			console.log("bar's this: ", t);
			console.log("bar's this.value: ", t.value); // this 는 어느객체?
		}
		bar();
	}
}
obj.foo();