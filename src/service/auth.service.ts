import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from './users.service';
import { JwtService } from '@nestjs/jwt';
import { TokenDTO } from 'src/domain/sign-in';
import { User } from '@prisma/client';


@Injectable()
export class AuthService {
    constructor(private usersService: UsersService, private jwtService: JwtService){}

    async signIn(email: string, password: string): Promise<TokenDTO> {
        const user = await this.usersService.findOneByEmail(email)

        if(!user){
            throw new UnauthorizedException()
        }

        if(user.password !== password){
            throw new UnauthorizedException()
        }

        const token = await this.jwtService.signAsync(user)

        return { token }
    }

    async signUp(data: User): Promise<TokenDTO>{
        const user = await this.usersService.create(data)

        return await this.signIn(user.email, user.password)
    }
}
