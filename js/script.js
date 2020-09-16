// function multiplyBy (multiplier) {
// 	var myFunc = function myFunc(x) {
// 		return x * multiplier;
// 	};
// 	return myFunc;
// }

// var multiplyBy3 = multiplyBy(3);
// console.log(multiplyBy3(10));

// function doOperationOn (x, operation) {
// 	return operation(x);
// }

// var result = doOperationOn(4, multiplyBy3);
// console.log(result);

// function divideBy (divisor) {
// 	var myFunc = function myFunc(x) {
// 		return x/divisor;
// 	};
// 	return myFunc;
// }

// var divideBy10 = divideBy(10);
// console.log(divideBy10(100))

// function doOperationOn (x, operation) {
// 	return operation(x);
// }

// result = doOperationOn(200, divideBy10);
// console.log(result);

function Circle (radius) {
	this.radius = radius;
}

Circle.prototype.getArea = 
	function() {
		return Math.PI * Math.pow (this.radius, 2);
};


var myCircle = new Circle(10);
console.log(myCircle.getArea());

var myObj = {
	name: "idk",
	age: 20,
	nana: "idkidk"
};

for (var prop in myObj) {
	console.log(prop + ": " + myObj[prop]);
}
