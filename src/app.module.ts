import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TriviasController } from './trivias/trivias.controller';
import { TriviasService } from './trivias/trivias.service';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true,
    }),
    DatabaseModule,
  ],
  controllers: [AppController, TriviasController],
  providers: [AppService, TriviasService],
})
export class AppModule {}
