



function countTo(n) {
    var i = 1;
    for ( ; i<= n; i=i+2) {

        console.info('i');
    }

}

function addNumbers(a, b) {
    console.info('prinul numar este ' + a);
    console.info('al doilea numar este ' + b);

    for (;b > 0; ) {
        a++; // il punem la a
        b--; //luam un deget de la b
        console.info(a + ' - au mai ramas ' + b  + ' degetele');
        }

        console.info('suma este: ' + a);
}




var count = addNumbers(5,3);