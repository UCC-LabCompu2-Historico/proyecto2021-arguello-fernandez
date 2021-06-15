/**
 * Verifica los valores ingresados y calcula la altura maxima, alcance maximo y tiempo de vuelo.
 * @method calculo
 * @return altura,alcance,tiempo
 */

function calculo() {
    if ((document.getElementById('input_velocidad').value == "") || (document.getElementById('input_angulo').value == "")) {
        alert("Ingrese ambos valores!");
    }
    if ((document.getElementById('input_velocidad').value <= 0) || (document.getElementById('input_angulo').value <= 0) || (document.getElementById('input_angulo').value >= 91)) {
        alert("La velocidad o el ángulo no pueden ser negativos o iguales a cero, ni el ángulo mayor a 90!");
        return;
    }
    var velocidad = document.getElementById('input_velocidad').value;
    var angulo = document.getElementById('input_angulo').value;


    var altura = (((Math.pow(velocidad,2))*(Math.pow(Math.sin(angulo*Math.PI/180),2)))/(2*9.8)).toFixed(2);
    document.getElementById("altura").value = altura;


    var alcance = (((Math.pow(velocidad,2))*(Math.sin(angulo*Math.PI/180)))/(9.8)).toFixed(2);
    document.getElementById("alcance").value = alcance;

    var tiempo = (((2*velocidad)*(Math.sin(angulo*Math.PI/180)))/(9.8)).toFixed(2);
    document.getElementById("tiempo").value = tiempo;

    simulacion(velocidad, angulo, tiempo);

}

/**
 * Calcula los valores de x e y para luego realizar la simulacion.
 * @method simulacion
 * @param {number} velocidad - El valor de la velocidad de la funcion anterior.
 * @param {number} angulo - El valor del angulo de la funcion anterior.
 * @param {number} tiempo - El valor del tiempo de la funcion anterior.
 * @return x,y
 */

var t=0;


function simulacion(velocidad, angulo, tiempo) {


    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");
    var x = velocidad*Math.cos(angulo*Math.PI/180);
    var y = velocidad*Math.sin(angulo*Math.PI/180);

    canvas.width = canvas.width;

    var img = new Image();
    img.src = "Imagenes/pelota.png";
    ctx.beginPath();
    ctx.drawImage(img, (125 + (x*t)), 400 - (y*t - 0.5 * 9.8 * (Math.pow(t,2))))
    ctx.closePath();

    t = t + 0.05;

    if (t < tiempo) {
        setTimeout(function () {simulacion(velocidad, angulo, tiempo);}, 50);
    } else {
        t=0;
    }
}