
var palabras = ['pie', 'localizar', 'coche',
    'culo', 'pelo', 'formula',
    'resfriado', 'perro', 'pescador',
    'repartidor', 'programador', 'velocimetro',
    'contador', 'salinidad', 'tabaco',
    'oso', 'ceniza', 'electricidad',
    'buho', 'frecuencia', 'entreunosyceros',
    'onanismo', 'osmosis', 'zapato'
];


var sopaLetras = wordfindgame.create(palabras, '#contenedor', '#palabras-sopadeletras');


$("#BTNresolver").click(function () {
    var resultado = wordfindgame.solve(sopaLetras, palabras);
    console.log(resultado);
});


$("#BTNrefresh").click(function () {
    window.location.href = window.location.href;
});
