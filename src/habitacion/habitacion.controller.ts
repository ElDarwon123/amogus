import { Body, Controller, Param, Delete, Get, Post, Patch } from '@nestjs/common';
import { HabitacionService } from './habitacion.service';
import { createHabitacionDto, updatedHabitacionDto } from './dto/habitacion.dto';

@Controller('habitacion')
export class HabitacionController {
    constructor(private habitacionService: HabitacionService) { }
    @Get()
    gethabitacion() {
        return this.habitacionService.getHabitaciones()
    }
    @Post()
    createHabitacion(@Body() nuevahabit: createHabitacionDto) {
        let paramToUpdate = this.habitacionService.createHabitacion(nuevahabit.nombre, nuevahabit.descripcion,
            nuevahabit.imagen, nuevahabit.localizacion, nuevahabit.precio, nuevahabit.calificacion, nuevahabit.disponibilidad, nuevahabit.tipoDeHabitacion,
            nuevahabit.capacidad, nuevahabit.huespedes, nuevahabit.huespedes.fechas, nuevahabit.servicios)
        return paramToUpdate
    }
    @Delete(':id')
    deleteHabitacion(@Param('id') id: string) {
        this.habitacionService.deleteHabitacion(id)
    }
    @Patch(':id')
    updateHabitacion(@Param('id') id: string, @Body() actualizarHabitacion: updatedHabitacionDto) {
        return this.habitacionService.updateHabitacion(id, actualizarHabitacion)
    }
}
