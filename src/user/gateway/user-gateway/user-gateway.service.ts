import { Injectable, OnModuleInit } from '@nestjs/common';
import { ConnectedSocket, SubscribeMessage, WebSocketGateway, WebSocketServer } from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';

@Injectable()
@WebSocketGateway(80, {path: '/ws'})
export class UserGatewayService implements OnModuleInit {
    @WebSocketServer()
    server: Server;
    

    @SubscribeMessage('whatsapp-send')
    sendMessage(@ConnectedSocket() client: Socket, message: string) {
        client.emit('whatsapp-send', message);
    }

    onModuleInit() {
        this.server.on('connection', async (client: Socket) => {
            
        })
    }
    
}
