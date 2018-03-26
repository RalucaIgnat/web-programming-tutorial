function countTo(n) {

    for (; i <= n; i += 5) {
        console.info(i);
        i++;
    }


}

function addNumbers(a, b) {
    console.info('primul nr este ' + a);
    console.info('al doilea  nr este ' + b);

    if (a < b) {
        var suma = a; // este nr cel mai mare
        var degete = b; // este nr cel mai mic

    }


    while (degete > 0) {
        degete--; //luam un deget de la b
        suma++; // il punem la a
        console.info(suma + ' - au mai ramas ' + degete + ' degetele');
    }
    console.info('suma este:' + suma);

    // for (; degete > 0;) {
    //     degete--; // // luam un deget de la b
    //     suma++;  // il punem la a
    //     console.info(suma + ' au  mai ramas ' + degete + 'degetele');
    // }
    // console.info('suma este: ' + suma);
}


var count = addNumbers(2, 6);