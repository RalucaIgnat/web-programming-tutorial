// for(var i = 0; i < persons.length; i++){
//     var person = persons[i];
//     rows += getRow(person[0],person[1],person[2]);
// }

function paySalary(person) {
    console.warn(person[0] + " -> : " + (person[2] * 60 /100));
}

function payBonus(person) {
    console.info("Bonus: " + (person[2] * 10 /100));
}

function foreachPers(persons, action) {
    console.info("===job started===")
    for(var i = 0; i < persons.length; i++){
        var person = persons[i];
        if(person[2]>400){
            action(person);//apelaz actiunea pe care mi-ai dat-o(paySalary)
        } }
}

foreachPers(persons, paySalary);
// foreachPers(persons, paySalary);
// foreachPers(persons, paySalary);
// //dupa 3 salarii vreuu un bonus
// foreachPers(persons,payBonus);

persons.forEach(payBonus);