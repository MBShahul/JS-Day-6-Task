class Person {
    constructor(firstName, lastName, dateOfBirth, age, gender, occupation, email, phoneNumber, address, nationality, height) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.dateOfBirth = dateOfBirth;
        this.age = age;
        this.gender = gender;
        this.occupation = occupation;
        this.email = email;
        this.phoneNumber = phoneNumber;
        this.address = address;
        this.nationality = nationality;
        this.height = height;
    }
}

const shahul = new Person("Shahul","Hameed","19-04-1997",27,"Male","Unemployed","iamshahulms6@gmail.com","9876543210","Thanjavur","Indian","173cm");
console.log(shahul);