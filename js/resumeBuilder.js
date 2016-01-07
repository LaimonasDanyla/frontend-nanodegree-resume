/*
This is empty on purpose! Your code to build the resume will go here.
 */
 /*
$("#main").append("Laimonas Danyla ");
var firstName = "Laimonas";
var age = 35;
console.log(firstName);
console.log(age);

var awesomeThoughts = ("I am Laimonas and I am AWESOME!");
console.log(awesomeThoughts)

var email = "laimonas.danyla@office.lt";
var newEmail = email.replace("office.lt", "gmail.com");
console.log(email);
console.log(newEmail);

var funThoughts = awesomeThoughts.replace("AWESOME", "FUN");
console.log(funThoughts);

$("#main").append(funThoughts);
*/

var name = "Laimonas Danyla";
var role = "Web Developer";

var formattedName = HTMLheaderName.replace("%data%", name);
var formattedRole = HTMLheaderRole.replace("%data%", role);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
