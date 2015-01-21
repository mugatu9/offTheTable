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

  if(peopleGroup.persons.length == false) {
    $("#report-statement").append(
     '<table>                   \
        <tbody id="table">      \
         <tr>                   \
          <th>Name</th>         \
          <th>Allergies</th>    \
          <th>Aversions</th>    \
        </tbody>                \
      </table>');
  }
  $("#table").append(
    "<tr><td>" + name + "</td><td>" + allergies + "</td><td>" + aversions + "</td></tr>"
    );
}

function generateReport () {


  $(".main").before(


    );

}
$("#add-person").on("click", function() {peopleGroup.addPerson()});


