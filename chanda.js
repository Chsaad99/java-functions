let person = {
    firstname: "saad",
    lastname: "saleem"
}
document.getElementById("demo").innerHTML = "My name is" + person.firstname + " " + person.lastname;
const  bunty= new Object();
bunty.firstName = "John";
bunty.lastName = "Doe";
bunty.age = 50;
bunty.eyeColor = "blue"; 

document.getElementById("demo1").innerHTML =
bunty.firstName + " is " + bunty.age + " years old.";