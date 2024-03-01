export enum Disponibilidad{
    disponible = 'hay disponible',
    noDisponible = 'no hay Disponible'
}
export enum tipoHabitacion{
    hotel = 'hotel',
    apartamento = 'apartamento',
    casa = 'casa',
    hostal = 'hostal'
}
export class habitacion{
    id: string;
    nombre: string;
    descripcion: string;
    imagen: string;
    localizacion: string;
    precio: number;
    calificacion: string;
    disponibilidad: Disponibilidad;
    tipoDeHabitacion: tipoHabitacion;
    capacidad: number;
    huespedes: 
        {
            nombreHuesped: string;
            apellido: string;
            edad: number;
            documento: string;
            telefono: string;
            fechas: {
                fechaDeLlegada: Date;
                fechaDeSalida: Date;
            }
        }
    servicios: {
        piscina: Disponibilidad;
        wifi: Disponibilidad;
        estacionamiento: Disponibilidad;
        restaurante: Disponibilidad;
        bar: Disponibilidad;
        spa: Disponibilidad;
        gimnasio: Disponibilidad;
    }
}