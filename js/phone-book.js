
function getRow(firstName,lastName,phone){
    return "<tr><td>" + firstName +"</td><td>" + lastName +"</td><td>" + phone +"</td></tr>";
}

var persons = [
     getRow("Nicolae","Matei",233),
     getRow("Andrei","Ilie",0),
     getRow("Raluca", "Ignat", 777)
];

var rows = '';

persons.forEach(function (person) {
    rows += person;
});

$('#phone-book tbody').html(rows);




