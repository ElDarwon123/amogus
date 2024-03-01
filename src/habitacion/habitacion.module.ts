import { Module } from '@nestjs/common';
import { HabitacionController } from './habitacion.controller';
import { HabitacionService } from './habitacion.service';

@Module({
  controllers: [HabitacionController],
  providers: [HabitacionService]
})
export class HabitacionModule {}
