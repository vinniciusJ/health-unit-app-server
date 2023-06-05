import { Controller, Post, HttpCode, Body, Get, Put, Param, Delete, UseGuards, HttpStatus, Query } from '@nestjs/common';
import { HealthUnitService } from '../service/health-unit.service';
import { Geolocation } from '@prisma/client';
import { AuthGuard } from 'src/guard/auth.guard';
import { Roles } from '../decorators/roles.decorator'
import { RolesGuard } from 'src/guard/roles.guard';
import { HealthUnit } from 'src/domain/health-unit';

@UseGuards(AuthGuard)
@Controller('health-unit')
export class HealthUnitController {
	constructor(private readonly healthUnitService: HealthUnitService) {}

	@Post()
	@HttpCode(HttpStatus.CREATED)
	@Roles('ADM')
	@UseGuards(RolesGuard)
	create(@Body() data: HealthUnit): Promise<HealthUnit | null> {
		return this.healthUnitService.create(data)
	}

	@Get()
	@HttpCode(HttpStatus.OK)
	findAll(): Promise<HealthUnit[]> {
		return this.healthUnitService.findALl()
	}

	@Get('closests?')
	@HttpCode(HttpStatus.OK)
	findClosests(@Body() point: Geolocation, @Query('radius') radius: number): Promise<HealthUnit[]> {
		return this.healthUnitService.findClosests(point, Number(radius))
	}

	@Get(':id')
	@HttpCode(HttpStatus.OK)
	findByID(@Param('id') id: number): Promise<HealthUnit> {
		return this.healthUnitService.findById(Number(id))
	}

	@Put(':id')
	@HttpCode(HttpStatus.NO_CONTENT)
	@Roles('ADM')
	@UseGuards(RolesGuard)
	update(@Param('id') id: number, @Body() data: HealthUnit): Promise<HealthUnit> {
		return this.healthUnitService.update(Number(id), data)
	}

	@Delete(':id')
	@HttpCode(HttpStatus.NO_CONTENT)
	@Roles('ADM')
	@UseGuards(RolesGuard)
	delete(@Param('id') id: number): Promise<HealthUnit> {
		return this.healthUnitService.delete(Number(id))
	}
	
}
