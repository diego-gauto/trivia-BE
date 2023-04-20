import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import * as Joi from 'joi';

import { enviroments } from './enviroments';
import config from './config';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TriviasController } from './trivias/trivias.controller';
import { TriviasService } from './trivias/trivias.service';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: enviroments[process.env.NODE_ENV] || '../.env',
      load: [config],
      isGlobal: true,
      validationSchema: Joi.object({
        API_KEY: Joi.string().required(),
        DATABASE_NAME: Joi.string().required(),
        POSTGRES_DB: Joi.string().required(),
        POSTGRES_USER: Joi.string().required(),
        POSTGRES_PASSWORD: Joi.string().required(),
        POSTGRES_PORT: Joi.number().required(),
        POSTGRES_HOST: Joi.string().required(),
      }),
    }),
    DatabaseModule,
  ],
  controllers: [AppController, TriviasController],
  providers: [AppService, TriviasService],
})
export class AppModule {}
