import { Module } from '@nestjs/common';
import { HealthUnitController } from './controller/health-unit.controller';
import { HealthUnitService } from './service/health-unit.service';

@Module({
  imports: [],
  controllers: [HealthUnitController],
  providers: [HealthUnitService],
})
export class AppModule {}
