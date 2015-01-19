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
var peopleGroup = new PeopleGroup();

PeopleGroup.prototype.addPerson = function() {
  var getInputs = [];
  for(i=0;i<3;i++){
    var data = document.getElementsByTagName("input")[i];
    getInputs.push(data.value);
    data.value = "";
  }
  var seperator = ",";
  var name      = getInputs[0],
      allergies = getInputs[1].split(seperator),
      aversions = getInputs[2].split(seperator);

  generateDisplay(name, allergies, aversions);

  peopleGroup.persons.push(new Person(name, allergies, aversions));

  counter++;
  getInputs = new Array();
}

var peopleGroup = new PeopleGroup();


for(i=0; i<peopleGroup.persons.length; i++){
  masterAllergiesList.push(peopleGroup.persons[i].allergies);
  masterAversionsList.push(peopleGroup.persons[i].aversions);
}


function generateDisplay (name, allergies, aversions) {
  if(!(document.getElementById("table"))) {
    var output   = document.getElementById("report-statement"),
        tbl      = document.createElement("table"),
        tblBody  = document.createElement("tbody");
        headRow  = document.createElement("tr"),
        tblHead1 = document.createElement("th"),
        head1txt = document.createTextNode("Name"),
        tblHead2 = document.createElement("th"),
        head2txt = document.createTextNode("Allergies"),
        tblHead3 = document.createElement("th"),
        head3txt = document.createTextNode("Aversions");
    tblHead1.appendChild(head1txt);
    tblHead2.appendChild(head2txt);
    tblHead3.appendChild(head3txt);
    headRow.appendChild(tblHead1);
    headRow.appendChild(tblHead2);
    headRow.appendChild(tblHead3);
    tblBody.appendChild(headRow);
    tblBody.setAttribute("id", "table");
    tbl.appendChild(tblBody);
    output.appendChild(tbl);

  }
  var tblBody     = document.getElementById("table"),
      row         = document.createElement("tr"),
      tdName      = document.createElement("td"),
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

var addPerson = document.getElementById("add-person");
addPerson.onclick = PeopleGroup.prototype.addPerson;
// addPerson.addEventListenter('click', function() {PeopleGroup.prototype.addPerson()}, false);
console.log("The group's allergies are " + masterAllergiesList);
console.log("The group's aversions are " + masterAversionsList);


