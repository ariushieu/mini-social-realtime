import { Controller, Get, UseGuards } from "@nestjs/common";
import { JwtAuthGuard } from "../../common/guards/jwt-auth.guard";
import { CurrentUser } from "../../common/decorators/current-user.decorator";

@Controller('auth')
export class AuthController{
    @Get('me')
    @UseGuards(JwtAuthGuard)
    getMe(@CurrentUser() user) {
        return{
            message: 'Thông tin người dùng đã được xác thực',
            user: user,
        };
    }
}