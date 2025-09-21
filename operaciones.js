const valor1Input = document.getElementById('valor1');
const valor2Input = document.getElementById('valor2');
const operadorActual = document.getElementById('operador-actual');
const resultadoElement = document.getElementById('resultado');
const botonesOperadores = document.querySelectorAll('button[data-operador]');

// variable para el operador
let operadorSeleccionado = '+';

// funciones de las operaciones
const suma = (numero1, numero2) => {
    return numero1 + numero2;
};

const resta = (numero1, numero2) => {
    return numero1 - numero2;
};

const multiplicacion = (numero1, numero2) => {
    return numero1 * numero2;
};

const division = (numero1, numero2) => {
    if (numero2 === 0) return "No se puede dividir entre 0";
    return numero1 / numero2;
};

const residuo = (numero1, numero2) => {
    return numero1 % numero2;
};

const potencia = (numero1, numero2) => {
    return Math.pow(numero1, numero2);
};

// funcion para los calculos
const calcularResultado = () => {
    const valor1 = parseFloat(valor1Input.value);
    const valor2 = parseFloat(valor2Input.value);
    
    // validar que ambos valores sean números
    if (isNaN(valor1) || isNaN(valor2)) {
        resultadoElement.textContent = 'Ingresa numeros';
        return;
    }
    
    let resultado;
    
    // operaciones deopendiendo el operador con switch/break
    switch (operadorSeleccionado) {
        case '+':
            resultado = suma(valor1, valor2);
            break;
        case '-':
            resultado = resta(valor1, valor2);
            break;
        case '*':
            resultado = multiplicacion(valor1, valor2);
            break;
        case '/':
            resultado = division(valor1, valor2);
            break;
        case '%':
            resultado = residuo(valor1, valor2);
            break;
        case '**':
            resultado = potencia(valor1, valor2);
            break;
        default:
            resultado = 'Operacion no valida';
    }
    
    // mostrar resultado
    if (typeof resultado === 'string') {
        resultadoElement.textContent = resultado;
    } else {
        resultadoElement.textContent = resultado;
    }
};

// funcion flecha para actualizar el operador 
const seleccionarOperador = (operador) => {
    operadorSeleccionado = operador;
    operadorActual.textContent = operador;
    
    // validar que esten los 2 numeros
    if (valor1Input.value && valor2Input.value) {
        calcularResultado();
    }
};

// event listeners de los botones de operadores
botonesOperadores.forEach(boton => {
    boton.addEventListener('click', () => {
        seleccionarOperador(boton.dataset.operador);
    });
});

// event listeners de los campos de entrada
valor1Input.addEventListener('input', calcularResultado);
valor2Input.addEventListener('input', calcularResultado);

// iniciar sin ningun operador
seleccionarOperador('');