import { Module } from '@nestjs/common';
import { HealthUnitController } from './controller/health-unit.controller';
import { HealthUnitService } from './service/health-unit.service';
import { PrismaService } from './service/prisma.service';

@Module({
  imports: [],
  controllers: [HealthUnitController],
  providers: [HealthUnitService, PrismaService],
})
export class AppModule {}
