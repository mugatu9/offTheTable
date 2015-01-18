<script>
var addPerson = document.getElementsByClassName("addPerson")[0];
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

  generateDisplay(name, allergies, aversions);

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


function generateDisplay (name, allergies, aversions) {
  if(!document.getElementsByClassName("table")) {
    var output =  document.getElementsByClassName("form-box")[0],
        tbl =     document.createElement("table"),
        tblBody = document.createElement("tbody");
    tblBody.setAttribute("class", "table");
    table.appendChild(tblBody);
    output.appendChild(tbl);
  }

  var tblBody =     document.getElementsByClassName("table"),
      row =         document.createElement("tr"),
      tdName =      document.createElement("td"),
      tdAllergies = document.createElement("td"),
      tdAversions = document.createElement("td");
  tdName.appendChild(document.createTextNode(name));
  tdAllergies.appendChild(document.createTextNode(allergies));
  tdAversions.appendChild(document.createTextNode(aversions));
  row.appendChild(tdName);
  row.appendChild(tdAllergies);
  row.appendChild(tdAversions);
  tblBody.appendChild(row);
}
console.log("The group's allergies are " + masterAllergiesList);
console.log("The group's aversions are " + masterAversionsList);


</script>
