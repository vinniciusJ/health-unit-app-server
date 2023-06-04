import { Module } from '@nestjs/common';
import { PrismaService } from 'src/service/prisma.service';
import { UsersService } from 'src/service/users.service';

@Module({
    providers: [UsersService, PrismaService],
    exports: [UsersService, PrismaService]
})
export class UsersModule {}
