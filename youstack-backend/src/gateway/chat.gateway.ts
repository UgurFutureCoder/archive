import { OnModuleInit } from '@nestjs/common';
import {
    MessageBody,
    SubscribeMessage,
    WebSocketGateway,
    WebSocketServer,
  } from '@nestjs/websockets';

import { Server } from 'socket.io';

@WebSocketGateway({
    cors: {
      origin: 'http://localhost:3000',
    },
  })



  export class ChatGateway implements OnModuleInit {
    @WebSocketServer() 
    server: Server
    
    onModuleInit() {
        this.server.on('connection', (socket) => {
            console.log(socket.id)

            socket.on('join_room', (data) => {
                socket.join(data)
                console.log(`User with id: ${socket.id} joined to room ${data}`)
            })
        })
    }
  }