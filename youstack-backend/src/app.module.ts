import { AuthService } from './auth/auth.service';
import { AuthController } from './auth/auth.controller';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { JwtModule } from '@nestjs/jwt';
import { ChatGateway } from './gateway/chat.gateway';
@Module({
  imports: [
    JwtModule.register({
      global: true,
      secret: 'chater',
      signOptions: { expiresIn: '15m' },
    }),
ChatGateway
  ],
  providers: [AppService, AuthService],
  controllers: [AppController, AuthController],
})
export class AppModule {
}
