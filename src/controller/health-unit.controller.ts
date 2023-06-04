import { Controller, Post, HttpCode, Body, Get, Put, Param, Delete } from '@nestjs/common';
import { HealthUnitService } from '../service/health-unit.service';
import { HealthUnit } from '@prisma/client';

@Controller('health-unit')
export class HealthUnitController {
	constructor(private readonly healthUnitService: HealthUnitService) {}

	@Post()
	@HttpCode(201)
	async create(@Body() data: HealthUnit): Promise<HealthUnit | null> {
		return this.healthUnitService.create(data)
	}

	@Get()
	@HttpCode(200)
	async findAll(): Promise<HealthUnit[]> {
		return this.healthUnitService.findALl()
	}

	@Get(':id')
	@HttpCode(200)
	async findByID(@Param('id') id: number): Promise<HealthUnit> {
		return this.healthUnitService.findById(Number(id))
	}

	@Put(':id')
	@HttpCode(204)
	async update(@Param('id') id: number, @Body() data: HealthUnit): Promise<HealthUnit> {
		return this.healthUnitService.update(Number(id), data)
	}

	@Delete(':id')
	@HttpCode(204)
	async delete(@Param('id') id: number): Promise<HealthUnit> {
		return this.healthUnitService.delete(Number(id))
	}
	
}
