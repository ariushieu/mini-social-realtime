import { Module, NestModule, MiddlewareConsumer } from "@nestjs/common";
import { ChatService } from "./chat.service";
import { ChatController } from "./chat.controller";
import { ChatMiddleware } from "../../common/middlewares/chat.middleware";

@Module({
    controllers: [ChatController],
    providers: [ChatService],

})
export class ChatModule implements NestModule {
    configure(consumer: MiddlewareConsumer) {
        consumer.apply(ChatMiddleware).forRoutes('chat');
    }
}