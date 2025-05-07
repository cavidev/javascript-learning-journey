Closures
Qué es:
Un closure es cuando una función accede a variables de su contexto exterior incluso después de que ese contexto haya terminado de ejecutarse.

Ejemplo:
js
Copy
Edit
function outer() {
let count = 0;
return function inner() {
count++;
return count;
}
}

const counter = outer();
console.log(counter()); // ?
console.log(counter()); // ?
Respuesta:

Copy
Edit
1
2
Porque inner recuerda el valor de count, incluso después de que outer ya terminó.
