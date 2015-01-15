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

var masterAllergiesList = [],
    masterAversionsList = [];

function Person(name, allergies, aversions) {
  this.name = name;
  this.allergies = allergies;
  this.aversions = aversions;
}

function PeopleGroup() {
  this.persons = [];
}

PeopleGroup.prototype.addPerson = function(){
  this.persons.push(new Person(name, allergies, aversions));
}

var peopleGroup = new PeopleGroup();

peopleGroup.addPerson("Nathan", ["nuts", "dairy", "celery"], ["shrimp", "mushrooms"]);
peopleGroup.addPerson("Matthew", ["gluten", "celery"], ["mayo", "shrimp", "sour cream"]);

for(i=0; i<peopleGroup.persons.length; i++){
  masterAllergiesList.push(peopleGroup.persons[i].allergies);
  masterAversionsList.push(peopleGroup.persons[i].aversions);
}

console.log("The group's allergies are " + masterAllergiesList);
console.log("The group's aversions are " + masterAversionsList);

</script>
