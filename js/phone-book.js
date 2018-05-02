
function getRow(firstName,lastName,phone){
    return "<tr><td>" + firstName +"</td><td>" + lastName +"</td><td>" + phone +"</td></tr>";
}

var persons = [];

//ajax
console.info('execute ajax');
$.get('js/mocks/phone-book.json').done(function(persons) {
    console.warn("phone-book loaded",persons);
    display(persons);
});

console.info('should load persons');


function display(persons) {
    var rows = '';

    function createRows(person) {
        rows += getRow(person["firstName"], person.lastName, person.phone);
    }
    persons.forEach(createRows); // callback (afiseaza functia asta pt fiecare pers pe care o ai)
       rows += '<tr>' +
           '<td><input type="text" required name="firstName" placeholder="Enter first name"></td>' +
           '<td><input type="text" name="lastName" placeholder="Enter last name"></td>'+
           '<td><input type="text" required name="phone" placeholder="Enter phone">' +
           '<button type ="submit">Add</button></td>' +
           '</tr>';


    $('#phone-book tbody').html(rows);


}
