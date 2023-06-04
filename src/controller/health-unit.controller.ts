import { Controller, Get } from '@nestjs/common';
import { HealthUnitService } from '../service/health-unit.service';

@Controller('health-unit')
export class HealthUnitController {
  constructor(private readonly appService: HealthUnitService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
