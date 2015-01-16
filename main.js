<script>
var addPerson = getElementsByClassName("addPerson")[0];
addPerson.addEventListenter('click',peopleGroup.addPerson, false);

var masterAllergiesList = [],
    masterAversionsList = [],
    counter = 1;

function Person(name, allergies, aversions) {
  this.name = name;
  this.allergies = allergies;
  this.aversions = aversions;
}

function PeopleGroup() {
  this.persons = [];
}

PeopleGroup.prototype.addPerson = function(name, allergies, aversions){
  var getInputs = document.getElementsByClassName("inputs").value);
  var seperator = ",";
  var name      = getInputs[0],
      allergies = getInputs[1].split(seperator),
      aversions = getInputs[2].split(seperator);
  this.persons.push(new Person(name, allergies, aversions));

  counter++;
}

var peopleGroup = new PeopleGroup();

peopleGroup.addPerson("Nathan",  ["nuts", "dairy", "celery"], ["shrimp", "mushrooms"]);
peopleGroup.addPerson("Matthew", ["gluten", "celery"],        ["mayo", "shrimp", "sour cream"]);

for(i=0; i<peopleGroup.persons.length; i++){
  masterAllergiesList.push(peopleGroup.persons[i].allergies);
  masterAversionsList.push(peopleGroup.persons[i].aversions);
}


function generateOutput () {}
console.log("The group's allergies are " + masterAllergiesList);
console.log("The group's aversions are " + masterAversionsList);


</script>
