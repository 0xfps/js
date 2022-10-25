const Motor = {
	name: "Bentley",
	start: () => {
		console.log("Started")
	}
}

Motor.start()

function Person (fname, lname) {
	this.firstname = fname
	this.lastname = lname

	this.age = 10

	this.height = (x) => {
		console.log("Height is " + x)
	}
}

const person = new Person("A", "B")
person.height(10)