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

function PeopleGroup() {
  this.persons = [];
}

PeopleGroup.prototype.addPerson = function(){
  this.persons.push(new Person(name, allergies, aversions));
}

var groupPeeps = new PeopleGroup();

groupPeeps.addPerson("Nathan", ["nuts", "dairy", "celery"], ["shrimp", "mushrooms"]);
groupPeeps.addPerson("Matthew", ["gluten", "celery"], ["mayo", "shrimp", "sour cream"]);

var masterAllergiesList = [groupPeeps[0][2], groupPeeps[1][2]],
    masterAversionsList = [groupPeeps[0][3], groupPeeps[1][3]];

console.log("The group's allergies are " + masterAllergiesList);
console.log("The group's aversions are " + masterAversionsList);
</script>
