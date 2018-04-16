function getRow(firstName, lastName, phone) {
    return "<tr><td>" + firstName + "</td><td>" + lastName + "</td><td>" + phone + "</td></tr>";

}

var persons = [
    ["Nicolae", "Matei", "123"],
    ["Andrei", "Matei", "123"],
    ["Maria", "Matei", "123"],
    ["Valentin", "Matei", "123"]
];

var rows = '';


for (var i = 0; i < persons.length; i++) {
    var person = persons[i];
    rows += getRow(person[0], person[1], person[2]);
}

$('#phone-book tbody').html(rows);