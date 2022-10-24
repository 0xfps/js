let sum = 0

var getSum = (a) => {
	for (i = 0; i < a.length; i++) {
		sum += a[i]
	}

	return sum
}

console.log(getSum([1,2,3,4,5,6]))

console.log("Convert To Kevin")
// let cel = prompt("Number:")

console.log(("2" * 1) + 273);