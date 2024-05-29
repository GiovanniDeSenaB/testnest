import { Injectable, OnModuleInit } from '@nestjs/common';
import { ConnectedSocket, MessageBody, SubscribeMessage, WebSocketGateway, WebSocketServer } from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';

@Injectable()
@WebSocketGateway(80, {path: '/ws', cors: false})
export class UserGatewayService implements OnModuleInit {
    @WebSocketServer()
    server: Server;
    

    @SubscribeMessage('whatsapp-send')
    sendMessage(@ConnectedSocket() client: Socket, @MessageBody() message: string) {
        this.server.emit('whatsapp-send', message);
    }

    onModuleInit() {
        this.server.on('connection', async (client: Socket) => {
            
        })
    }
    
}
