const k = (a) => {
	console.log(12 ** a)
}

k(16)

const f = [1,2,3,5]
f.push(5)
console.log(f)
console.log(f[2])

const _owner = "Anthony"

const car = {
	name: "Audi",
	model: 2020,
	seats: 4,
	owner: _owner
}

car.owner = "Paul"
console.log(car.owner)