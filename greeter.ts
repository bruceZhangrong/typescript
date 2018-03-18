class Student {
	fullName: string;
	constructor(public firstName, public middleInitial, public lastName) {
		this.fullName = firstName + ' ' + middleInitial + ' ' + lastName;
	}
}

interface Person {
	lastName: string,
	middleInitial: string,
	firstName: string
}

function greeter(person: Person) {
	return 'Hello' + person.firstName + ' ' + person.middleInitial + ' ' + person.lastName;
}

let user = new Student('Bruce', 'D', 'zhang');

document.body.innerHTML = greeter(user);