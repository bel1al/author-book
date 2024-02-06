import { INestApplication, ValidationPipe } from '@nestjs/common';
import { Logger } from 'nestjs-pino';

export function setupBaseConfigurations(app: INestApplication): void {
  const validationPipeOptions = {
    whitelist: true,
    forbidNonWhitelisted: true,
    transform: true,
  };
  app.useGlobalPipes(new ValidationPipe(validationPipeOptions));
  app.setGlobalPrefix('api');

  app.useLogger(app.get(Logger));

  app.enableShutdownHooks();

  app.enableCors({
    origin: [],
    exposedHeaders: ['Content-Disposition'],
    credentials: true,
  });
}
