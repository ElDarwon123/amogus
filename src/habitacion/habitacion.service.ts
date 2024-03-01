import { Injectable } from '@nestjs/common';
import { habitacion, Disponibilidad, tipoHabitacion } from './habitacion.entity';
import { v4 } from 'uuid';
import { updatedHabitacionDto } from './dto/habitacion.dto';
@Injectable()
export class HabitacionService {
    // objeto para no repetir codigo
    private list: habitacion[] = [{
        id: v4(),
        nombre: "",
        descripcion: "",
        imagen: "",
        localizacion: "",
        precio: 150000,
        calificacion: "",
        disponibilidad: Disponibilidad.disponible,
        tipoDeHabitacion: tipoHabitacion.hotel,
        capacidad: 4,
        huespedes: 
            {
                nombreHuesped: "",
                apellido: "",
                edad: 18,
                documento: "",
                telefono: "",
                fechas: {
                    fechaDeLlegada: new Date(),
                    fechaDeSalida: new Date(),
                }
            },
        servicios: {
            piscina: Disponibilidad.disponible,
            wifi: Disponibilidad.disponible,
            estacionamiento: Disponibilidad.disponible,
            restaurante: Disponibilidad.disponible,
            bar: Disponibilidad.disponible,
            spa: Disponibilidad.disponible,
            gimnasio: Disponibilidad.disponible
        }
    }]
    // obtiene todas las habitaciones
    getHabitaciones() {
        return this.list
    }
    gethabitacionesById(id: string) {
            return this.list.find((h) => h.id === id)
    }
    // crear habitaciones
    createHabitacion(
        nombre: string, descripcion: string, imagen: string, localizacion: string,
        precio: number, calificacion: string, disponibilidad: Disponibilidad, tipoHabitacion: tipoHabitacion, capacidad: number,
        huespedes: {
            nombreHuesped: string, apellidoHuesped: string, edadHuesped: number,
            documentoHuesped: string, telefonoHuesped: string,
        },
        fechas: { fechaEntrada: Date, fechaSalida: Date },
        servicios: {
            piscina: Disponibilidad, wifi: Disponibilidad, estacionamiento: Disponibilidad,
            restaurante: Disponibilidad, bar: Disponibilidad, spa:Disponibilidad, gimnasio: Disponibilidad
        }) {
        const newHabitacion = {
            id: v4(),
            nombre: nombre,
            descripcion: descripcion,
            imagen: imagen,
            localizacion: localizacion,
            precio: precio,
            calificacion: calificacion,
            disponibilidad: Disponibilidad.disponible,
            tipoDeHabitacion: tipoHabitacion,
            capacidad: capacidad,
            huespedes: {
                nombreHuesped: huespedes.nombreHuesped,
                apellido: huespedes.apellidoHuesped,
                edad: huespedes.edadHuesped,
                documento: huespedes.documentoHuesped,
                telefono: huespedes.telefonoHuesped,
                fechas: {
                    fechaEntrada: Date(),
                    fechaSalida: Date()
                }
            },
            servicios: {
                piscina: Disponibilidad.disponible,
                wifi: Disponibilidad.disponible,
                estacionamiento: Disponibilidad.disponible,
                restaurante: Disponibilidad.disponible,
                bar: Disponibilidad.disponible,
                spa: Disponibilidad.disponible,
                gimnasio: Disponibilidad.disponible
            }
        }


    }
    updateHabitacion(id: string, newHabitacion: updatedHabitacionDto) {
        // busca la habitacion a traves del id
        const habitacion = this.gethabitacionesById(id)
        // mete la nueva info en la habitacion
        const nuevaHabitacion = Object.assign(habitacion, newHabitacion)
        // se asegura de que exista la habitacion y si existe la acutaliza
        this.list = this.list.map(habitacion => habitacion.id === id ? nuevaHabitacion : habitacion)
        return nuevaHabitacion
    }
    deleteHabitacion(id: string) {
        // se actualiza la lsta y no retorna una nueva
        this.list = this.list.filter(Item => Item.id !== id)
    }


}
