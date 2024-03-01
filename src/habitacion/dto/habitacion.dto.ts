import { IS_EMAIL, IsEnum, IsNotEmpty, IsNotEmptyObject, IsNumber, IsObject, IsString, MinLength } from "class-validator";
import { Disponibilidad, tipoHabitacion } from "../habitacion.entity";
import { Injectable } from "@nestjs/common";
import { ClassTransformer } from "class-transformer";

export class FechaDto {
    @IsNotEmpty()
    fechaEntrada: Date;

    @IsNotEmpty()
    fechaSalida: Date;
}

export class HuespedDto {
    @IsString() @IsNotEmpty()
    nombreHuesped: string;

    @IsString() @IsNotEmpty()
    apellidoHuesped: string;

    @IsNumber() @IsNotEmpty()
    edadHuesped: number;

    @IsString() @IsNotEmpty()
    documentoHuesped: string;

    @IsString() @IsNotEmpty()
    telefonoHuesped: string;

    @IsNotEmptyObject() 
    fechas: FechaDto;
}

export class ServiciosDto {
    @IsEnum(Disponibilidad) @IsNotEmpty()
    piscina: Disponibilidad;

    @IsEnum(Disponibilidad) @IsNotEmpty()
    wifi: Disponibilidad;

    @IsEnum(Disponibilidad) @IsNotEmpty()
    estacionamiento: Disponibilidad;

    @IsEnum(Disponibilidad) @IsNotEmpty()
    restaurante: Disponibilidad;

    @IsEnum(Disponibilidad) @IsNotEmpty()
    bar: Disponibilidad;

    @IsEnum(Disponibilidad) @IsNotEmpty()
    spa: Disponibilidad;

    @IsEnum(Disponibilidad) @IsNotEmpty()
    gimnasio: Disponibilidad;
}
export class createHabitacionDto {
    @IsString() @IsNotEmpty() @MinLength(5)
    nombre: string;

    @IsString() @IsNotEmpty() @MinLength(5)
    descripcion: string;

    @IsNotEmpty() @IsString()
    imagen: string;

    @IsNotEmpty() @IsString()
    localizacion: string;

    @IsNumber() @IsNotEmpty()
    precio: number;

    @IsString()
    calificacion: string;

    @IsEnum(Disponibilidad) @IsNotEmpty() @IsString()
    disponibilidad: Disponibilidad;

    @IsEnum(tipoHabitacion) @IsNotEmpty()
    tipoDeHabitacion: tipoHabitacion;

    @IsNumber() @IsNotEmpty() @MinLength(1)
    capacidad: number;

    @IsNotEmptyObject() @IsObject()
    huespedes: HuespedDto;

    @IsNotEmptyObject()
    servicios: ServiciosDto;
}
export class updatedHabitacionDto{
    @IsString() @IsNotEmpty() @MinLength(5)
    nombre: string;
    @IsString() @IsNotEmpty() @MinLength(5)
    descripcion: string;
    @IsNotEmpty() @IsString()
    imagen: string;
    @IsNotEmpty() @IsString()
    localizacion: string;
    @IsNumber() @IsNotEmpty()
    precio: number;
    @IsString()
    calificacion: string;
    @IsEnum(Disponibilidad) @IsNotEmpty() @IsString()
    disponibilidad: Disponibilidad;
    @IsEnum(tipoHabitacion) @IsNotEmpty()
    tipoDeHabitacion: tipoHabitacion;
    @IsNumber() @IsNotEmpty() @MinLength(1)
    capacidad: number;
    @IsNotEmptyObject()
    huespedes: HuespedDto
    @IsNotEmptyObject()
    servicios: ServiciosDto
}