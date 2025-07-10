// ===== 1. VARIABLES Y TIPOS DE DATOS =====

const nombre = "Luis"; 
const edad = 25; 
const esEstudiante = true; 

console.log("Nombre:", nombre);
console.log("Edad:", edad);
console.log("¿Es estudiante?:", esEstudiante);

let sinValor;
let valorNulo = null;

console.log("Variable sin valor (undefined):", sinValor);
console.log("Variable con valor nulo:", valorNulo);
console.log("Tipo de sinValor:", typeof sinValor);
console.log("Tipo de valorNulo:", typeof valorNulo);

// ===== 2. INGRESO DE DATOS POR TECLADO =====

function calcularEdad() {
    const añoNacimiento = prompt("ingresa tu año de nacimiento:");
    const añoActual = new Date().getFullYear();
    const edadCalculada = añoActual - parseInt(añoNacimiento);
    
    console.log(`Tienes ${edadCalculada} años.`);
    alert(`Tienes ${edadCalculada} años.`);
}

// calcularEdad();

function sumarNumeros() {
    const numero1 = prompt("ingresa el primer numero:");
    const numero2 = prompt("ingresa el segundo numero:");
    
    const num1 = Number(numero1);
    const num2 = Number(numero2);
    
    const suma = num1 + num2;
    console.log(`La suma de ${num1} y ${num2} es: ${suma}`);
    alert(`La suma de ${num1} y ${num2} es: ${suma}`);
}

// sumarNumeros();

// ===== 3. CONDICIONAL IF =====

function verificarEdad() {
    const edadUsuario = prompt("¿Cual es tu edad?");
    
    if (parseInt(edadUsuario) >= 18) {
        console.log("Puedes entrar");
        alert("Puedes entrar");
    } else {
        console.log("No puedes entrar");
        alert("No puedes entrar");
    }
}

// verificarEdad();

function verificarNumero() {
    const numero = prompt("ingresa un numero:");
    const num = Number(numero);
    
    if (num > 0) {
        console.log("positivo");
        alert("Es positivo");
    } else if (num < 0) {
        console.log("negativo");
        alert("negativo");
    } else {
        console.log("Es cero");
        alert("Es cero");
    }
}

// verificarNumero();

// ===== 4. BUCLE WHILE =====

function contarHasta() {
    const numero = prompt("Ingresa un numero para contar desde 1:");
    const num = parseInt(numero);
    let contador = 1;
    
    console.log(`Contando desde 1 hasta ${num}:`);
    
    while (contador <= num) {
        console.log(contador);
        contador++;
    }
    
    alert(`Conteo finalizado. Revisa la consola para ver el resultado.`);
}

// contarHasta();

function verificarContraseña() {
    const contraseñaCorrecta = "1234";
    let contraseñaIngresada;
    
    while (contraseñaIngresada !== contraseñaCorrecta) {
        contraseñaIngresada = prompt("Ingresa la contraseña:");
        
        if (contraseñaIngresada === contraseñaCorrecta) {
            console.log("Contraseña correcta");
            alert("Contraseña correcta");
        } else {
            console.log("Contraseña incorrecta, intenta de nuevo");
            alert("Contraseña incorrecta, intenta de nuevo");
        }
    }
}

// verificarContraseña();

// ===== 5. BUCLE FOR =====

function imprimirDel1Al10() {
    console.log("numeros del 1 al 10:");
    
    for (let i = 1; i <= 10; i++) {
        console.log(i);
    }
    
    alert("numeros impresos en consola.");
}

// imprimirDel1Al10();

function tablaMultiplicar() {
    const numero = prompt("Ingresa un número para ver su tabla de multiplicar:");
    const num = parseInt(numero);
    
    console.log(`Tabla de multiplicar del ${num}:`);
    
    for (let i = 1; i <= 10; i++) {
        const resultado = num * i;
        console.log(`${num} x ${i} = ${resultado}`);
    }
    
    alert(`Tabla del ${num} impresa en consola.`);
}

