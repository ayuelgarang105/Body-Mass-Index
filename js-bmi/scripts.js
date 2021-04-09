var bodyMassIndex = (weight, height) => weight / height

var weight = parseInt(prompt("Enter your weight: "))
var height = parseInt(prompt("Enter your height: "))

var results = bodyMassIndex(weight, height);
alert("Your body mass index is " + results);

