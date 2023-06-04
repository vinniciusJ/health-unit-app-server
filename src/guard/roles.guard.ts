import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common'
import { Reflector } from '@nestjs/core'
import { RolesEnum } from '@prisma/client'
import { Observable } from 'rxjs'
import { ROLES_KEY } from 'src/decorators/roles.decorator'

@Injectable()
export class RolesGuard implements CanActivate{
    constructor(private reflector: Reflector){}

    canActivate(context: ExecutionContext): boolean  {
        const requiredRoles = this.reflector.getAllAndOverride<RolesEnum[]>(ROLES_KEY, [
            context.getHandler(),
            context.getClass()
        ])

        if(!requiredRoles) return true

        const { user } = context.switchToHttp().getRequest()

        console.log(user, requiredRoles, requiredRoles.some(role => user.role === role))

        return requiredRoles.some(role => user.role === role)
    }
}