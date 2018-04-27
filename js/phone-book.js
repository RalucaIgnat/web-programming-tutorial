
function getRow(firstName,lastName,phone){
    return "<tr><td>" + firstName +"</td><td>" + lastName +"</td><td>" + phone +"</td></tr>";
}

var persons = [
    //firstName, lastName, phone
     ["Nicolae","Matei",233],
     ["Andrei","Ilie",0],
     ["Raluca", "Ignat", 777],
    ["Damaris", "Sighiartau", 655]
];

var rows = '';

persons.forEach(function (person) {
    rows += getRow(person[0],person[1],person[2]);
});

$('#phone-book tbody').html(rows);




