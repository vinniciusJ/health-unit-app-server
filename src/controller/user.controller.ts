import { Controller, Put, HttpCode, HttpStatus, Body, UseGuards, Request, Get, Param } from '@nestjs/common';
import { User } from '@prisma/client';
import { AuthGuard } from 'src/guard/auth.guard';
import { UsersService } from 'src/service/users.service';

@Controller('user')
@UseGuards(AuthGuard)
export class UserController{
    constructor(private userService: UsersService){}

    @Get(':id')
    @HttpCode(HttpStatus.OK)
    findByID(@Param('id') id: number): Promise<User>{
        return this.userService.findOneByID(Number(id))
    }

    @Put(':userID/change-health-unit/:healthUnitID')
    @HttpCode(HttpStatus.NO_CONTENT)
    changeHealthUnit(@Param('userID') userID: string, @Param('healthUnitID') healthUnitID: string): Promise<User> {
        return this.userService.changeHealthUnit(Number(userID), Number(healthUnitID))
    }
}