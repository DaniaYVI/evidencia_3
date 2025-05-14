# Método de la Secante con Tolerancia de Error (%)
Este proyecto implementa el **Método de la Secante**, un método numérico para encontrar raíces de funciones no lineales. La aplicación permite al usuario ingresar una función, valores iniciales (`x0` y `x1`), y una tolerancia de error porcentual para calcular la raíz de la función.

## Descripción del Método
El **Método de la Secante** es un método iterativo que utiliza dos aproximaciones iniciales para encontrar la raíz de una función. A diferencia del método de Newton-Raphson, no requiere el cálculo de la derivada de la función.
La fórmula deL Metodo de la secante es la siguiente:

x2 = x1 - f(x1) * (x1 - x0) / (f(x1) - f(x0))

El proceso se repite hasta que el error porcentual relativo sea menor que el error porcentual ingresado.

## Instrucciones de Uso
1. **Descargar los archivos o copiar y pegar en Visual Studio Code**:
   - `evi3.html` - Interfaz
   - `evi.js` - Formulas de la secante en codigo
   - `styles.css` - Estilo de la interfaz
2. **Abrir el archivo HTML**:
   Abrir el archivo `evi3.html` en el google.
3. **Ingresar los datos**:
   - Escribe la función `f(x)` en el campo correspondiente (ejemplo, x**3+x+16).
   - Ingresa los valores iniciales `x0` y `x1` (ejemplo, x0=-2 y x1=-2.75).
   - Especifica la tolerancia de error porcentual (ejemplo, 15).
4. **Ejecutar**:
   Click en el botón **"Ejecutar"** para calcular la raíz de la función.
5. **Resultados**:
   Los resultados se mostrarán en el área de texto, incluyendo las iteraciones, el valor de `x` en cada paso y el error porcentual.
