/* let x= 3+4;
console.log(x); */ //sanity test

//function to say hello
/* function helloThere () {
    alert('Hello there!');
}
 */
/* //call the function
helloThere(); */

//Dry - dont repeat yourself
let sayHello = function (whatName, anotherName) {
  alert("Howdy " + whatName + "! Maybe u know " + anotherName);
  return ["finished processing..."];
};

//call the function
//let finishMsg = sayHello("kevin", "kim");
//console.log("received this message: " + finishMsg);

//anonymous function
/* let myanonfunc= function(msg)
{
    console.log(msg);
}

//call the function
let finishMsg = sayHello("Bob", "kim");

myanonfunc("Don't panic");
 */

//do some research into JavaScript arrow functions

//OOP(Object Oriented Programming)
//Object Literals

//Define some instances of objects with object literal notation




const person = {
  name: {
      first: "Grace",
      middle: "Nell",
      last: "Hopper",
  },
  age: 85,
  isNinja: true,
  address: {
    street: "main st",
    city: "memphis",
    state: "TN",
    zip: "38016-2435"
  },
  sayHi: function () {
    alert("Well hello there!!");
  },
}


/* //log the person instance
console.log(person);

//dot notation
console.log("Here is the name of person: " + person.name);
console.log("Here is the person age: " + person.age);

//call a function
person.sayHi(); 

//log the zipcode of my person
console.log(person.address.zip);

//log the stree of my person
console.log(person.address.street);

//log the last name of person
console.log(person.name.last);

//log the middle name of person
console.log(person.name.middle); */

//what does encapsulation mean? Has all info/data needed

//create a shop object with name, city, store hours
let company1 = 
{
    name: "Nike",
    city: "Miami",
    areYouOpen: function()
    {
        return("Sorry we're not open")
    }

}
let company2 = 
{
    name: "Chanel",
    city: "Nashville",
    areYouOpen: function()
    {
        return("Yes we're open")
    }

}
let company3 = 
{
    name: "Walmart",
    city: "Chatanooga",
    areYouOpen: function()
    {
        return("Yes we're open")
    }

}

//use dot notation for company 2
console.log("Company 2 name: " + company2.name + " is it open? " + company2.areYouOpen());

//add them all to an array
let myCompanyList = [company1, company2, company3];

//loop through company list of cities
console.log("Here's all of the cities for the stores")

//print each city for each company instance
for (let i = 0; i < myCompanyList.length; i++)
{
    console.log(myCompanyList[i].city); //use dot notation to get specific properties or methods
}

//what is 'this' in OOP is talking about the object you're currently working on

//DOM(Document Object Model)
