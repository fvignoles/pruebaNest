import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MensajesController } from './mensajes/mensajes.controller';
import { TypeOrmModule} from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'Post131075',
      database: 'sendemeapp_db',
      entities: [__dirname + "/**/*.entity{.ts,.js}"],
      synchronize: true    
    }),      
  ],
  controllers: [AppController, MensajesController],
  providers: [AppService],
})
export class AppModule {}
