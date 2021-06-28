/**
 * Verifica los valores ingresados y calcula la altura maxima, alcance maximo y tiempo de vuelo. Ademas cambia unidades.
 * @method calculo
 * @return altura,alcance,tiempo
 */

function calculo() {
    if (document.getElementById('input_velocidad').value == "") {
        alert("Ingrese una velocidad valida!");
        document.getElementById('input_velocidad').value = "";
        return;
    }
    if (document.getElementById('input_angulo').value == "") {
        alert("Ingrese un angulo valido!");
        document.getElementById('input_angulo').value = "";
        return;
    }
    if (document.getElementById('input_velocidad').value <= 0) {
        alert("La velocidad no puede ser negativa o igual a cero!");
        document.getElementById('input_velocidad').value = "";
        return;
    }
    if ((document.getElementById('input_angulo').value <= 0) || (document.getElementById('input_angulo').value >= 91)) {
        alert("El ángulo no pueden ser negativo, igual a cero o mayor a 90!");
        document.getElementById('input_angulo').value = "";
        return;
    }
    var velocidad = document.getElementById('input_velocidad').value;
    var angulo = document.getElementById('input_angulo').value;

    if (document.getElementById('unidadvelocidad').value == "km/h") {
        velocidad = velocidad / 3.6;
    }

    if (document.getElementById('unidadangulo').value == "Grad") {
        angulo = angulo * Math.PI / 180;
    }

    var altura = (((Math.pow(velocidad, 2)) * (Math.pow(Math.sin(angulo), 2))) / (2 * 9.8)).toFixed(2);
    document.getElementById("altura").value = altura;


    var alcance = (((Math.pow(velocidad, 2)) * (Math.sin((angulo) * 2))) / (9.8)).toFixed(2);
    document.getElementById("alcance").value = alcance;

    var tiempo = (((2 * velocidad) * (Math.sin(angulo))) / (9.8)).toFixed(2);
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

var t = 0;


function simulacion(velocidad, angulo, tiempo) {


    var canvas1 = document.getElementById("canvas1");
    var ctx = canvas1.getContext("2d");
    var canvas2 = document.getElementById("canvas2");
    var pelota = canvas2.getContext("2d");
    var x = velocidad * Math.cos(angulo);
    var y = velocidad * Math.sin(angulo);

    ctx.beginPath();
    ctx.fillStyle = "#f5f5f5";
    ctx.arc((145 + (x * t)), 425 - (y * t - 0.5 * 9.8 * (Math.pow(t, 2))), 5, 0, 2 * Math.PI);
    ctx.closePath();
    ctx.fill();

    canvas2.width = canvas2.width;

    var img = new Image();
    img.src = "Imagenes/pelota.png";
    pelota.beginPath();
    pelota.drawImage(img, (125 + (x * t)), 400 - (y * t - 0.5 * 9.8 * (Math.pow(t, 2))))
    pelota.closePath();

    t = t + 0.05;

    if (t < tiempo) {
        setTimeout(function () {
            simulacion(velocidad, angulo, tiempo);}, 50);
    } else {
        t = 0;
    }
}

/**
 * Borra el canvas.
 * @method borrar
 * @return canvas1,canvas2
 */

function borrar() {
    var canvas1 = document.getElementById("canvas1");
    var canvas2 = document.getElementById("canvas2");
    canvas1.width = canvas1.width;
    canvas2.width = canvas2.width;
}