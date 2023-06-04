import { Controller, Post, HttpCode, HttpStatus, Body, UseGuards, Request, Get } from '@nestjs/common';
import { User } from '@prisma/client';
import { SignInForm, TokenDTO } from 'src/domain/sign-in';
import { AuthGuard } from 'src/guard/auth.guard';
import { AuthService } from 'src/service/auth.service';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService){}

    @Post('sign-in')
    @HttpCode(HttpStatus.OK)
    signIn(@Body('email') email: string, @Body('password') password: string): Promise<TokenDTO>{
        return this.authService.signIn(email, password)
    }

    @Post('sign-up')
    @HttpCode(HttpStatus.CREATED)
    signUp(@Body() data: User): Promise<TokenDTO> {
        return this.authService.signUp(data)
    }

    @UseGuards(AuthGuard)
    @Get('profile')
    getProfile(@Request() req): Promise<User> {
        return req.user
    }
}
