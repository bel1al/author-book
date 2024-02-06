import { INestApplication, ValidationPipe } from '@nestjs/common';
import { Logger } from 'nestjs-pino';

import { API_PREFIX } from '../../constants/common.js';

export function setupBaseConfigurations(app: INestApplication): void {
  const validationPipeOptions = {
    whitelist: true,
    forbidNonWhitelisted: true,
    transform: true,
  };
  app.useGlobalPipes(new ValidationPipe(validationPipeOptions));
  app.setGlobalPrefix(API_PREFIX);

  app.useLogger(app.get(Logger));

  app.enableShutdownHooks();

  app.enableCors({
    origin: ['http://localhost:3010', 'http://127.0.0.1:3010'],
    exposedHeaders: ['Content-Disposition'],
    credentials: true,
  });
}
