<script>
/*

var foodCategories = [],
    fruit = ["banana", "orange", "kiwi", "apple", "mango", "cherry"],
    veggies = ["celery", "broccoli", "turnips", "cabbage", "carrots", "kale"],
    dairy = ["milk", "cheese", "ice cream", "yogurt", "cream", "butter"],
    grains = ["wheat", "oats", "barley", "rice", "rye", "amaranth"],
    nuts = ["cashews", "almonds", "walnuts", "pecans", "chestnuts", "hazlenuts"],
    legumes = ["peanuts", "beans", "soybeans", "lentils", "chickpeas", "alfalfa"];

foodCategories.push(fruit, veggies, dairy, grains, nuts, legumes);

*/

function Person(name, allergies, aversions) {
  this.name = name;
  this.allergies = allergies;
  this.aversions = aversions;
}

PeopleGroup.prototype.addPerson = function(){
  this.persons.push(new Person(name, allergies, aversions));
}


// var nathan = new Person(["nuts", "dairy", "celery"], ["shrimp", "mushrooms"]);
// var matthew = new Person(["gluten", "celery"], ["mayo", "shrimp", "sour cream"]);


groupPeeps.addPerson("Nathan", ["nuts", "dairy", "celery"], ["shrimp", "mushrooms"]);
groupPeeps.addPerson("Matthew", ["gluten", "celery"], ["mayo", "shrimp", "sour cream"]);



Person.aversions = function() {

}

function PeopleGroup() {
  this.persons = [];
}


var groupPeeps = new PeopleGroup();








</script>
