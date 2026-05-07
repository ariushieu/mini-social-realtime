import {Module} from "@nestjs/common";
import { PassportModule } from "@nestjs/passport";
import { ConfigModule } from "@nestjs/config";
import { JwtStrategy } from "./strategies/jwt.strategy";
import { AuthController } from "./auth.controller";

@Module({
    imports: [
        ConfigModule,
        PassportModule,
    ],
    providers: [JwtStrategy],
    exports: [PassportModule],
    controllers: [AuthController],
})
export class AuthModule {}