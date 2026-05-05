import { Injectable } from "@nestjs/common";

@Injectable()
export class ChatService{
    getChat(): string{
        return "Chat Feature is working!";
    }
}