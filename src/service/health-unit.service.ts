import { Injectable } from '@nestjs/common';

@Injectable()
export class HealthUnitService {
  getHello(): string {
    return 'Hello World!';
  }
}
