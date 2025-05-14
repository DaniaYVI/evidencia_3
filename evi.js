// Evaluar la función f(x) ingresada
function evaluarFuncion(funcStr, x) {
    try {
        return eval(funcStr); // Evalúa la función reemplazando 'x' por su valor
    } catch (e) {
        throw new Error("Error al evaluar la función: "+e.message);
    }
}
// Método de la secante con tolerancia de error (%)
function metodoSecante() {
    // Obtener los valores ingresados por el usuario
    const funcion=document.getElementById("funcion").value; // Función f(x)
    let x0=parseFloat(document.getElementById("x0").value); // Valor inicial x0
    let x1=parseFloat(document.getElementById("x1").value); // Valor inicial x1
    const error=parseFloat(document.getElementById("tolerancia").value); // Tolerancia de error
    let salida=""; // Variable para almacenar el resultado
    let iteracion=1; // Contador de iteraciones

    while (true) {
        // Evaluar la función en x0 y x1
        let fx0=evaluarFuncion(funcion.replace(/x/g, `(${x0})`));
        let fx1=evaluarFuncion(funcion.replace(/x/g, `(${x1})`));
        // Verificar si hay división por cero
        if (fx1 - fx0 === 0) {
            salida+=`División por cero en la iteración ${iteracion}\n`;
            break;
        }
        // Calcular el siguiente valor x2 usando la fórmula del método de la secante
        let x2 = x1 - fx1 * (x1 - x0) / (fx1 - fx0);
        // Calcular el porcentaje de error
        let errorPorcentaje=Math.abs((x2 - x1) / x2) * 100;
        // Agregar los resultados de la iteración al texto de salida
        salida+=`Iteración ${iteracion}: x = ${x2.toFixed(6)}, Error = ${errorPorcentaje.toFixed(6)}%\n`;
        // Verificar si el error es menor que la tolerancia
        if (errorPorcentaje < error) {
            salida+=`\nRaíz encontrada: x = ${x2.toFixed(6)} (con error menor a ${error}%) en la iteración ${iteracion}\n`;
            break;
        }
        // Actualizar los valores para la siguiente iteración
        x0=x1;
        x1=x2;
        iteracion++;
    }
    // Mostrar el resultado final
    salida+=`\nÚltima aproximación: x = ${x1.toFixed(6)}`;
    document.getElementById("resultado").textContent=salida;
}