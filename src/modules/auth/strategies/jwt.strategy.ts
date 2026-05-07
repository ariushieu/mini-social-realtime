import { Injectable, UnauthorizedException } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt, Strategy } from "passport-jwt";
import { ConfigService } from "@nestjs/config";


export interface JwtPayload {
    role: string;
    userId: number;
    sub: string;   //this is email
    iat: number;
    exp: number;
}

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
    constructor(configService: ConfigService) {
        const secret = configService.get<string>('JWT_SECRET');
        if (!secret) {
            throw new Error('JWT_SECRET is not defined in environment variables');
        }
        const secretBuffer = Buffer.from(secret, 'base64');
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            secretOrKey: secretBuffer,
            ignoreExpiration: false,
        });
    }

    validate(payload: JwtPayload) {
        if (!payload.userId || !payload.sub) {
            throw new UnauthorizedException('Invalid token payload');
        }
        return {
            userId: payload.userId,
            email: payload.sub,
            role: payload.role,
        };
    }
}
