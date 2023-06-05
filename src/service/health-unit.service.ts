import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { Geolocation, TypeEnum } from '@prisma/client';
import { filterByRadius } from 'src/utils/filter-by-radius';
import { HealthUnit } from 'src/domain/health-unit';

const INCLUDE_OPTIONS = {
	include: {
		address: true,
		geolocation: true
	}
}

@Injectable()
export class HealthUnitService {
	constructor(private prisma: PrismaService) {}

	async create(data): Promise<HealthUnit> {
		return await this.prisma.healthUnit.create({
			data: {
				...data,
				address: {
					create: data.address
				},
				geolocation: {
					create: data.geolocation
				}
			},
			...INCLUDE_OPTIONS
		})
	}

	async findClosests(point: Geolocation, radius: number): Promise<HealthUnit[]> {
		const healthUnities = await this.prisma.healthUnit.findMany({...INCLUDE_OPTIONS}) as HealthUnit[]

		return filterByRadius(healthUnities, point, radius)
	}

	async filter(query: string = '', type?: TypeEnum): Promise<HealthUnit[]> {
		return await this.prisma.healthUnit.findMany({
			where: {
				OR: [
					{ name: { startsWith: query } },
					{ address: { street: { startsWith: query } } }
				],
				...(type && { type })
			},
			...INCLUDE_OPTIONS
		}) as HealthUnit[]
	}

	async findALl(): Promise<HealthUnit[]> {
		return await this.prisma.healthUnit.findMany({ ...INCLUDE_OPTIONS })
	}

	async findById(id: number): Promise<HealthUnit> {
		return await this.prisma.healthUnit.findUnique({ where: { id }, ...INCLUDE_OPTIONS })
	}

	async update(id: number, data): Promise<HealthUnit> {
		return await this.prisma.healthUnit.update({ 
			data: {
				...data,
				address: {
					update: data.adress
				},
				geolocation: {
					update: data.geolocation
				}
			}, 
			where: { id } 
		}) as HealthUnit
	}

	async delete(id: number): Promise<HealthUnit> {
		return await this.prisma.healthUnit.delete({ 
			where: { id },
		}) as HealthUnit
	}
}
