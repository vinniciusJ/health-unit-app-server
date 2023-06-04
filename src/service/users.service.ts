import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { User } from '@prisma/client';

@Injectable()
export class UsersService {
    constructor(private prisma: PrismaService) {}

    async findOne(email: string): Promise<User | null>{
        return await this.prisma.user.findUnique({ where: { email } })
    }

    async create(data: User): Promise<User> {
        return await this.prisma.user.create({ data })
    }
}
