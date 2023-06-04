import { Controller, Post, HttpCode, Body, Get, Put, Param, Delete, UseGuards } from '@nestjs/common';
import { HealthUnitService } from '../service/health-unit.service';
import { HealthUnit } from '@prisma/client';
import { AuthGuard } from 'src/guard/auth.guard';
import { Roles } from '../decorators/roles.decorator'
import { RolesGuard } from 'src/guard/roles.guard';

@UseGuards(AuthGuard)
@Controller('health-unit')
export class HealthUnitController {
	constructor(private readonly healthUnitService: HealthUnitService) {}

	@Post()
	@HttpCode(201)
	@Roles('ADM')
	@UseGuards(RolesGuard)
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
	@Roles('ADM')
	@UseGuards(RolesGuard)
	async update(@Param('id') id: number, @Body() data: HealthUnit): Promise<HealthUnit> {
		return this.healthUnitService.update(Number(id), data)
	}

	@Delete(':id')
	@HttpCode(204)
	@Roles('ADM')
	@UseGuards(RolesGuard)
	async delete(@Param('id') id: number): Promise<HealthUnit> {
		return this.healthUnitService.delete(Number(id))
	}
	
}
