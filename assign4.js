
//COMM644
//Jimena Assignment 4

//Practice with JavaScript OOP Concepts (20 points)

//Within a new web page, create the following applications. Remember to comment out every application once //you’ve finished with that step. Be sure to place all of your JavaScript code within an external script file:

 
//Step 1 

var ANIMAL = ANIMAL || {};
ANIMAL.Dog = function(type, color) {
    this._type = type;
    this._color = color;
    this.getInfo = function(){
        return color + ' ' + type + ' dog';
    } 
}
ANIMAL.Cat = function(type, color) {
    this._type = type;
    this._color = color;
    this.getInfo = function() {
        return color + ' ' + type + ' cat';
    }
}

/*
//Step 2

var cat = {
    type: "Romano",
    color: "Grey",
    getInfo: function () {
        return this.color + ' ' + this.type + ' cat';
    }
}

function Dog(){
    var type  = "Husky";
    var color = "black";
    this.getInfo = function(){
        return color + ' ' + type + ' dog';
    }  
}
var dog = new Dog();
*/

/*
//Step 3

var cat = {
    type: "Romano",
    color: "Grey",
    getInfo: function () {
        return this.color + ' ' + this.type + ' cat';
    }
}
var dog = new Dog("Husky", "black");
*/

/*
//Step 4

Animal = function(type, color) {
    window.console.log("A animal has been created");
    this._type = type;
    this._color = color;
    this.getInfo = function(){
        return color + ' ' + type + ' ANIMAL';
    } 
}
var animal = new Animal();
*/

/*
//Step 5

var Animal = function(color) {
    var _type = "animal";
    var _color = color;
    window.console.log("Object is a "+_color + ' ' + _type);
}
var animal = new Animal("Grey");
*/

/*   
//Step 6 

var Animal = function(type, breed, color, height, length) {
    var type = type;
    var breed = breed;
    var color = color;
    var height = height;
    var length = length;
    this.getInfo = function(){
        return (type + " is " + breed + " " + color + ' ' + height + " high " + length + " in length.");
    } 
}
var dog = new Animal("dog","Husky","Grey","26 inches","50 inches");
*/

/* 
//Step 7

var Animal = function(type, breed, color, height, length) {
    this.type = type;
    this.breed = breed;
    this.color = color;
    this.height = height;
    this.length = length; 
}
var dog = new Animal("dog","Husky","Grey","28 inches","45 inches");

for(var property in dog){
    document.write(property + ': ' + dog[property] +"<br>");
}
*/

/* 
//Step 8

var Animal = function(type, color) {
    this.type = type;
    this.color = color;
}
Animal.prototype.speak = function() {
    if (this.type == "dog"){
       return("The "+this.color+" dog is barking!");
    }else { 
       return("The "+this.color+" cat is meowing!");
    }
};
var dog = new Animal("dog","Grey");
var cat = new Animal("cat","White");

window.console.log(dog.speak());
window.console.log(cat.speak());
*/ 

/* 
//Step 9

var Animal = function(type, breed, color, height, length) {
    var type = type;
    var breed = breed;
    var color = color;
    var height = height;
    var length = length;
    getInfo = function(){
        return (type + " is " + breed + " " + color + ' ' + height + " high " + length + " in length.");
    } 
    this.checkType = function() {
       if (type == "dog"){
          return("Dog");
       }else { 
          return("Cat");
       }
    }
};
Animal.prototype.speak = function(type) {
       window.console.log("The " + type + " has made a noise");    
};

var dog = new Animal("dog","Husky","Grey","14 inches","27 inches");
var cat = new Animal("cat","Romano","grey","10 inches","14 inches");    
    
var type = dog.checkType();
dog.speak(type);
var type = cat.checkType();
cat.speak(type);         
*/
    
/* 
//Step 10

String.prototype.findWords = function(word, phrase){
    var count = 0;
    var word = word;
    var phrase = phrase;
 
    var re = new RegExp(word, 'gi');
    count = phrase.match(re).length;
    
    alert(count);
}
var phrase = "This is my test paragraph, cat, dog, cat, monkey, cat, hotel, house";
para.findWords("cat", phrase);
*/

/* OK
//The Recipe Card (15 points)	

var recipe = new Object;
recipe.title = "Guacamole";
recipe.servings = 4;
recipe.ingredients = [
   "3 Avacados"               ,
   "1 Lime"                   , 
   "1 Teaspoon Salt"          , 
   "1/2 Cup Onion"            , 
   "3 Tablespoons of Cilantro",
   "2 Diced Tomatoes"         , 
   "1 Teaspoon Garlic"        , 
   "1 Pinch Ground Pepper"    
];
recipe.displayRecipe = function(){
   window.console.log("Title: " + this.title);
   window.console.log("Serves: "+ this.servings);
   window.console.log("Ingredients:");
   for (var i = 0; i < this.ingredients.length; i++){
      window.console.log("- " + this.ingredients[i]);
   }
}
recipe.displayRecipe();
*/
  

//The Reading List (15 points)

var books = new Array();

var book1 = new Object();
book1.title  = "Twiglight";
book1.author = "Tom Smith";
book1.alreadyRead = false;
books[0]=book1;

var book2 = new Object();
book2.title  = "Harry Potter";
book2.author = "J K Rowling";
book2.alreadyRead = true;
books[1]=book2;

var book3 = new Object();
book3.title  = "Las Mil Noches";
book3.author  = "Gabriel Garcia Marquez";
book3.alreadyRead = true;
books[2]=book3;

var book4 = new Object();
book4.title  = "Everething We Keep";
book4.author = "Kerry Lonsdale";
book4.alreadyRead = true;
books[3]=book4;

var book5 = new Object();
book5.title  = "Doubt";
book5.author = "C E Tobisman";
book5.alreadyRead = false;
books[4]=book5;

for (var i = 0; i < books.length; i++){
    if (books[i].alreadyRead == true){
       window.console.log("I have read "+books[i].title+" by "+books[i].author+"<br>");
    }else{
       window.console.log("I must read "+books[i].title+" by "+books[i].author+"<br>");
    }
}

//end-of-file.
