<script>
var foodCategories = [],
    fruit = ["banana", "orange", "kiwi", "apple", "mango", "cherry"],
    veggies = ["celery", "broccoli", "turnips", "cabbage", "carrots", "kale"],
    dairy = ["milk", "cheese", "ice cream", "yogurt", "cream", "butter"],
    grains = ["wheat", "oats", "barley", "rice", "rye", "amaranth"],
    nuts = ["cashews", "almonds", "walnuts", "pecans", "chestnuts", "hazlenuts"],
    legumes = ["peanuts", "beans", "soybeans", "lentils", "chickpeas", "alfalfa"];

foodCategories.push(fruit, veggies, dairy, grains, nuts, legumes);


function PeopleGroup() {
  this.persons = [];
}

var groupPeeps = new PeopleGroup();

PeopleGroup.prototype.addPerson = function(){
  this.persons.push(new Person(name, allergies, aversions));
}



function Person(name) {
  this.name = name;
  this.aversions = [];
  this.allergies = [];
}
Person.aversions = function() {

}


</script>
