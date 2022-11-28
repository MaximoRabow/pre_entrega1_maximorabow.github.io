  
// Ingresar datos de usuario
let nombrePasajero = prompt ("Ingrese nombre y apellido");
    console.log ("Nombre" + " " + nombrePasajero);
let cantidadpasajeros = prompt ("Cantidad de pasajeros");
    console.log ("Pasajeros" + " " + cantidadpasajeros);
let cantidadDeHabitaciones = prompt ("Cantidad de Habitaciones");
    console.log ("Habitaciones" + " " + cantidadDeHabitaciones);
    for (let i = 1; i <= cantidadDeHabitaciones; i++) {
        if (i <= 10) {
            console.log ("Hay disponibilidad");
            alert ("Disponibilidad confirmada")
        } else if (i > 10) {
            console.log ("No hay disponibilidad")
            alert ("No contamos con la disponibilidad necesaria")
        }
    }
let tipodeHabitacion = prompt ("Tipo de Habitación" + " " + "Doble, Triple, Cuadruple");
    console.log ("Tipo de habitación" + " " + tipodeHabitacion);
let fechaDeIngreso = parseInt (prompt ("Check in"));
    console.log ("Fecha de Ingreso" + " " + fechaDeIngreso);
let fechaDeEgreso = parseInt (prompt ("Check out"));
    console.log ("Fecha de Egreso" + " " + fechaDeEgreso);

//Recuento cantidad de noches y precio estadia
let cantidaddenoches = (fechaDeEgreso - fechaDeIngreso - 1);
    console.log ("Cantidad de noches" + " " + cantidaddenoches);
let precioPorNoche = (cantidaddenoches * 5500 * cantidadDeHabitaciones);
    console.log ("Costo total" + " " + precioPorNoche);
let costoTotal = prompt ("El costo de la estadia es" + " " + precioPorNoche + " Responda OK para confirmar reserva o NO para declinar la reserva");
    

//Comprobación de disponibilidad y confirmación
    if (cantidadDeHabitaciones <= 10 && tipodeHabitacion == "doble" && costoTotal == "ok") {
        alert ("Reserva Confirmada");
    } else if (cantidadDeHabitaciones > 10 || tipodeHabitacion == "triple, cuadruple" || costoTotal == "no") {
        alert ("No hay disponibilidad");
    }

    
    

