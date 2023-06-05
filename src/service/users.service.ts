import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { User } from '@prisma/client';

@Injectable()
export class UsersService {
    constructor(private prisma: PrismaService) {}

    async findOneByEmail(email: string): Promise<User | null>{
        return await this.prisma.user.findUnique({ where: { email }, include: { healthUnit: true } })
    }

    async findOneByID(id: number): Promise<User | null>{
        return await this.prisma.user.findUnique({ where: { id }, include: { healthUnit: true } })
    }

    async create(data: User): Promise<User> {
        return await this.prisma.user.create({ data })
    }

    async changeHealthUnit(userID: number, healthUnitID: number): Promise<User> {
        const healthUnit = await this.prisma.healthUnit.findUnique({ where: { id: healthUnitID } })
        const user = await this.prisma.user.findUnique({ where: { id: userID } })

        return await this.prisma.user.update({
            data: { ...user, healthUnitId: healthUnit.id },
            where: { id: userID }
        })
    }
}
