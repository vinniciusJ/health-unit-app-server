import { Module } from '@nestjs/common'
import { AuthModule } from './module/auth.module';
import { UsersModule } from './module/users.module';
import { HealthUnitModule } from './module/health-unit.module';
import { PrismaService } from './service/prisma.service';
import { JwtModule } from '@nestjs/jwt'

@Module({
    imports: [
        AuthModule,
        UsersModule,
        HealthUnitModule,  
        JwtModule.register({
            global: true,
            secret: process.env.JWT_TOKEN_KEY,
            signOptions: {
                expiresIn: '1h'
            }
        })
    ],
    providers: [PrismaService],
    exports: [PrismaService]
})
export class AppModule{}