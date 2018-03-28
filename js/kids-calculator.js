
function countTo(n) {
    var i = 1;
    for ( ; i<= n; i=i+2) {

        console.info('i');
    }

}

function addNumbers(a, b) {
    console.info('prinul numar este ' + a);
    console.info('al doilea numar este ' + b);

    var suma = a; // este nr cel mai mare
    var  degete = b; //min

    if(a < b){

        suma = b;
        degete = a;
    }

    for (;degete> 0; ) {
        suma++; // il punem la a
        degete--; //luam un deget de la b
        console.info(suma + ' - au mai ramas ' + degete  + ' degetele');
        }

        console.info('suma este: ' + suma);
}


var count = addNumbers(2,6);