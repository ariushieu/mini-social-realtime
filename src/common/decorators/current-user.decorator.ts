import { createParamDecorator, ExecutionContext } from "@nestjs/common";

export const CurrentUser = createParamDecorator(
    (data: string, ctx: ExecutionContext) => {
        const request = ctx.switchToHttp().getRequest();
        const user = request.user;

        // Nếu gọi @CurrentUser('userId') thì trả về mỗi userId
        // Nếu gọi @CurrentUser() thì trả về cả object user
        return data ? user?.[data] : user;
    }
)