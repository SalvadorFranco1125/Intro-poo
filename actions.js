// Calcula la edad del padre cuando nació el hijo
function calcularEdadDePaternidad(padre, hijo) {
    const nacimientoPadre = padre.fechaNacimiento;
    const nacimientoHijo = hijo.fechaNacimiento;
    let edad = nacimientoHijo.getFullYear() - nacimientoPadre.getFullYear();
    const mes = nacimientoHijo.getMonth() - nacimientoPadre.getMonth();
    if (mes < 0 || (mes === 0 && nacimientoHijo.getDate() < nacimientoPadre.getDate())) {
        edad--;
    }
    return edad;
}

// Clase Persona con propiedades y métodos
class Persona {
    constructor(nombre, fechaNacimiento, tieneHijos) {
        this.nombre = nombre; // string
        this.fechaNacimiento = new Date(fechaNacimiento); // Date
        this.tieneHijos = tieneHijos; // boolean
    }

    saludar() {
        return `Hola, mi nombre es ${this.nombre}.`;
    }

    calcularEdad() {
        const hoy = new Date();
        let edad = hoy.getFullYear() - this.fechaNacimiento.getFullYear();
        const mes = hoy.getMonth() - this.fechaNacimiento.getMonth();
        if (mes < 0 || (mes === 0 && hoy.getDate() < this.fechaNacimiento.getDate())) {
            edad--;
        }
        return edad;
    }


}

// Crear instancias de Persona
const persona1 = new Persona('Alejandra', '1975-03-20', true);
const persona2 = new Persona('Salvador', '2001-05-06', false);

// Mostrar información de las personas
console.log("La Madre se llama " + persona1.nombre + " y tiene " + persona1.calcularEdad() + " años.");
console.log("El hijo se llama " + persona2.nombre + " y tiene " + persona2.calcularEdad() + " años.");

// Calculadora de edad paternidad
const edadPaternidad = calcularEdadDePaternidad(persona1, persona2);
console.log(`La edad de ${persona1.nombre} cuando nació ${persona2.nombre} fue de ${edadPaternidad} años.`);    


