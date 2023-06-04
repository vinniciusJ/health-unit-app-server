import { CanActivate, ExecutionContext, Injectable, UnauthorizedException, Request } from "@nestjs/common";
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthGuard implements CanActivate{
    constructor(private jwtService: JwtService){}

    private extractTokenFromHeader(request): string | undefined {
        const [type, token] = request.headers.authorization?.split(' ') ?? []
        
        return type === 'Bearer' ? token : undefined;
    }

    async canActivate(context: ExecutionContext): Promise<boolean> {
        const request = context.switchToHttp().getRequest()
        const token = this.extractTokenFromHeader(request)

        if(!token){
            throw new UnauthorizedException()
        }

        try{
            const payload = await this.jwtService.verifyAsync(token, {
                secret: 'health-unit-auth'
            })

            request['user'] = payload
        }
        catch{
            throw new UnauthorizedException()
        }

        return true
    }
}