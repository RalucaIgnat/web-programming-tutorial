
function getRow(firstName,lastName,phone){
    return "<tr><td>" + firstName +"</td><td>" + lastName +"</td><td>" + phone +"</td></tr>";
}

var persons = [];

//ajax

$.get('js/mocks/phone-book.json').done(function(data) {
    console.warn("phone-book loaded",data);
    display(data);
});

console.info('should load persons');


function display(persons) {
    var rows = '';

    function createRows(person) {
        rows += getRow(person["firstName"], person.lastName, person.phone);
    }
    persons.forEach(createRows); // callback (afiseaza functia asta pt fiecare pers pe care o ai)

    $('#phone-book tbody').html(rows);


}
