/**
 * Conversion de unidades de metros pies y yardas
 * @method cambiarUnidades
 * @param {string} id - El id de metros yardas pulagadas
 * @param {number} valor - El valor de los inputs metros yardas pulgadas
 * @return
 */

function calculo() {
    var velocidad = document.getElementById('input_velocidad').value;
    var angulo = document.getElementById('input_angulo').value;
    //var tiempo = document.getElementById('tiempo').value;


    var altura = ((Math.pow(velocidad,2))*(Math.pow(Math.sin(angulo),2)))/(2*9.8); //calculo de la altura maxima del objeto
    //var altura = alturas.toFixed(2); //RESULTADO FINAL truncado a 3 cifras
    document.getElementById("altura").value = altura;


    var alcance = ((Math.pow(velocidad,2))*(Math.sin(angulo)))/(9.8); //calculo de alcance maximo en x
    //var alcance = alcances.toFixed(2); // RESULTADO FINAL truncado a 3 cifras
    document.getElementById("alcance").value = alcance;

    var tiempo = ((2*velocidad)*(Math.sin(angulo)))/(9.8); //calculo de alcance maximo en x
    //var tiempo = tiempos.toFixed(2); // RESULTADO FINAL truncado a 3 cifras
    document.getElementById("tiempo").value = tiempo;

    //miDibujo(alcanMax, altMax, velocidad, angulo, tiempo);

}