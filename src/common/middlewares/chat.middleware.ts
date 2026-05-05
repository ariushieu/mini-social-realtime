import { Injectable, NestMiddleware} from "@nestjs/common";
import { Request, Response, NextFunction} from 'express';

@Injectable()
export class ChatMiddleware implements NestMiddleware{
    use(req: Request, res: Response, next: NextFunction){
        console.log(`[Chat Middleware] ${req.method} ${req.url}`);
        next();
    }
}