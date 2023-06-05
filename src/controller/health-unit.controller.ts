import { Controller, Post, HttpCode, Body, Get, Put, Param, Delete, UseGuards, HttpStatus } from '@nestjs/common';
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
	@HttpCode(HttpStatus.CREATED)
	@Roles('ADM')
	@UseGuards(RolesGuard)
	async create(@Body() data: HealthUnit): Promise<HealthUnit | null> {
		return this.healthUnitService.create(data)
	}

	@Get()
	@HttpCode(HttpStatus.OK)
	async findAll(): Promise<HealthUnit[]> {
		return this.healthUnitService.findALl()
	}

	@Get(':id')
	@HttpCode(HttpStatus.OK)
	async findByID(@Param('id') id: number): Promise<HealthUnit> {
		return this.healthUnitService.findById(Number(id))
	}

	@Put(':id')
	@HttpCode(HttpStatus.NO_CONTENT)
	@Roles('ADM')
	@UseGuards(RolesGuard)
	async update(@Param('id') id: number, @Body() data: HealthUnit): Promise<HealthUnit> {
		return this.healthUnitService.update(Number(id), data)
	}

	@Delete(':id')
	@HttpCode(HttpStatus.NO_CONTENT)
	@Roles('ADM')
	@UseGuards(RolesGuard)
	async delete(@Param('id') id: number): Promise<HealthUnit> {
		return this.healthUnitService.delete(Number(id))
	}
	
}
