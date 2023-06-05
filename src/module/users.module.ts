import { Module } from '@nestjs/common';
import { UserController } from 'src/controller/user.controller';
import { PrismaService } from 'src/service/prisma.service';
import { UsersService } from 'src/service/users.service';

@Module({
    controllers: [UserController],
    providers: [UsersService, PrismaService],
    exports: [UsersService, PrismaService]
})
export class UsersModule {}
