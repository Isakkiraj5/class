class Person {
    constructor(firstName, lastName, age, gender, email) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.gender = gender;
        this.email = email;
    }

    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }

    static createPersonFromObject(personObject) {
        const { firstName, lastName, age, gender, email } = personObject;
        return new Person(firstName, lastName, age, gender, email);
    }
}


const person1 = new Person("John", "Doe", 30, "Male", "john.doe@example.com");

console.log("Full Name:", person1.getFullName());
console.log("Age:", person1.age);
console.log("Gender:", person1.gender);
console.log("Email:", person1.email);


const personObject = {
    firstName: "Jane",
    lastName: "Smith",
    age: 25,
    gender: "Female",
    email: "jane.smith@example.com"
};

const person2 = Person.createPersonFromObject(personObject);

console.log("\nDetails of Person 2:");
console.log("Full Name:", person2.getFullName());
console.log("Age:", person2.age);
console.log("Gender:", person2.gender);
console.log("Email:", person2.email);
