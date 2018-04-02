function getRow (firstName, lastName, phone) {

    return "<tr><td> + firstName +</td><td>lastName</td><td>Phone</td></tr>";
}

 var row1 = getRow("Nicolae","Matei", "0");
 var row2 = getRow("Andrei","Ilie", "0"); ;

 //document.getElementById('phone-book').getElementsByTagName('tbody')[0].innerHTML = row1 + row2;

 $('#phone-book').html(row1 + row2);