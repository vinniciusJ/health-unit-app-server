import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { Geolocation } from '@prisma/client';
import { filterByRadius } from 'src/utils/filter-by-radius';
import { HealthUnit } from 'src/domain/health-unit';

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
			include: { address: true, geolocation: true }
		})
	}

	async findClosests(point: Geolocation, radius: number): Promise<HealthUnit[]> {
		const healthUnities = await this.prisma.healthUnit.findMany({ include: { geolocation: true, address: true } }) as HealthUnit[]

		return filterByRadius(healthUnities, point, radius)
	}

	async findALl(): Promise<HealthUnit[]> {
		return await this.prisma.healthUnit.findMany({ include: { address: true, geolocation: true } })
	}

	async findById(id: number): Promise<HealthUnit> {
		return await this.prisma.healthUnit.findUnique({ where: { id }, include: { address: true, geolocation: true } })
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
