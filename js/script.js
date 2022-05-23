// for (let i = 0; i <= 3; i++) {
//     console.log('Usted es el jefe de los minisuper ?'+i);
// }


// for(let i=0; i<=10; i++){
//     console.log(i+'*2 es igual a '+i*2);
// }
// console.log(' gracias vuelva pronto');

// for(let i=1; i<=5; i++){
//     let ingresarNombre = prompt('Escribe tu nombre para solicitar tu turno')
//     alert (ingresarNombre+' tu turno asignado es el '+i )

// }
// alert ('Se han asignado todos los turnos posibles, vuelva otro día ');

// for(let i=1; i<=10; i++){
//     if(i==5){
//         break;
//     }
//     alert(i+);
// }

// for(let i=1; i<=10; i++){
//     if(i==4){
//         continue;
//     }
//     alert(i);
// }

// let edad = parseInt(prompt('Ingresa tu edad'));
// while (edad<13){
//     console.log('No podes pasar teniendo ' +edad+' año de edad');
//     edad = parseInt(prompt('Ingresa tu edad'));
// }
// if (edad>=13){
//     alert('Bienvenido guachin');
// }

// let contador = 1;
// while ( contador <= 5){
//     console.log(contador);
//     contador++;
// }
// do{
//     edad = parseInt(prompt('Ingrese su edad'));
//     console.log('usted no tiene la suficiente edad para ingresar');

// }while(edad<13){
//     console.log('usted tiene la suficiente edad para ingresar')
// }

// let color = prompt('Ingresa un color primario en minusculas');
// switch (color) {
//     case 'azul':
//         alert('elegiste azul');

//         break;
//     case 'rojo':
//         alert('elegiste rojo');

//         break;
//     case 'amarillo':
//         alert('elegiste amarillo');

//         break;


//     default:
//         alert('Tu eleccion no es ningun color primario');
//         break;
// }


let saldo = 1500;
let opcion = prompt('Elegi una opción: 1 - Saldo \n 2- Retiro de dinero \n 3-Déposito \n Presiona X para finalizar');

while (opcion != 'x') {
    switch (opcion) {
        case '1':
            alert('tu saldo es $' + saldo);
            break;
        case '2':
            let retiro = parseFloat(prompt('Ingrese la cantidad a retirar'));
            if (saldo >= retiro) {
                saldo = saldo - retiro;
                alert('has retirado  $' + retiro + ' de tu cuenta ' + 'tu nuevo saldo es $' + saldo);
            } else {
                alert('Sus fondos son insuficientes');
            }
            break;
        case '3':
            let deposito = parseFloat(prompt('Ingrese cuanto dinero quiere depositar'));
            saldo = saldo + deposito;
            alert('Usted a depositado $' + deposito + ' Y ahora su saldo es $' + saldo);
            break;


        default:
            alert('elegiste una opcion invalida');
            break;

    }
    opcion = prompt('Elegi una opción: 1 - Saldo \n 2- Retiro de dinero \n 3-Déposito \n Presiona X para finalizar');
}