import { Module } from '@nestjs/common';
import { HealthUnitController } from '../controller/health-unit.controller';
import { HealthUnitService } from '../service/health-unit.service';
import { PrismaService } from '../service/prisma.service';
import { AuthModule } from './auth.module';
import { UsersModule } from './users.module';

@Module({
  controllers: [HealthUnitController],
  providers: [HealthUnitService, PrismaService],
})
export class HealthUnitModule {}
