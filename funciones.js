/**
 * Calculo de altura maxima, alcance maximo y tiempo de vuelo
 * @method calculo
 * @param {string} id - El id de metros yardas pulagadas
 * @param {number} valor - El valor de los inputs metros yardas pulgadas
 * @return
 */

function calculo() {
    var velocidad = document.getElementById('input_velocidad').value;
    var angulo = document.getElementById('input_angulo').value;


    var altura = (((Math.pow(velocidad,2))*(Math.pow(Math.sin(angulo*Math.PI/180),2)))/(2*9.8)).toFixed(2);
    document.getElementById("altura").value = altura;


    var alcance = (((Math.pow(velocidad,2))*(Math.sin(angulo*Math.PI/180)))/(9.8)).toFixed(2);
    document.getElementById("alcance").value = alcance;

    var tiempo = (((2*velocidad)*(Math.sin(angulo*Math.PI/180)))/(9.8)).toFixed(2);
    document.getElementById("tiempo").value = tiempo;

    simulacion(alcance, altura, velocidad, angulo, tiempo);

}

/**
 * Calculo de altura maxima, alcance maximo y tiempo de vuelo
 * @method calculo
 * @param {string} id - El id de metros yardas pulagadas
 * @param {number} valor - El valor de los inputs metros yardas pulgadas
 * @return
 */

var t=0;


function simulacion(alcance, altura, velocidad, angulo, tiempo) {


    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");
    var vX = velocidad*Math.cos(angulo*Math.PI/180);
    //var xMax = canvas.width;
    var vY = velocidad*Math.sin(angulo*Math.PI/180);
    //var yMax = canvas.height;
    //var margen = 10;

    canvas.width = canvas.width;
    ctx.beginPath();
    ctx.fillStyle = "#000000";
    ctx.arc(vX*t,400 - (vY*t - 0.5 * 9.8 * (Math.pow(t,2))),20,0,2*Math.PI);
    //ctx.arc(vX*t,300-((vY*t)-(9.8*(t**2)/2)),20,0,2*Math.PI);
    //ctx.arc(0+margen,yMax-20-margen,20,0,2*Math.PI);
    ctx.closePath();
    ctx.fill();

    //tmax = tiempo;  if (t < tmax) {
    //t = t + tmax/400;
    t = t + 0.05;

    if (t < tiempo) {
        setTimeout(function () {simulacion(alcance, altura, velocidad, angulo, tiempo);}, 50);
    } else {
        t=0;
    }
}