import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from './common/configuration/config.service';
import { INestApplication } from '@nestjs/common';
import { setupBaseConfigurations } from './common/configuration/api/setup-base-configurations';
import { setupSwagger } from './common/configuration/api/setup-swagger';
import { useContainer } from 'class-validator';

export async function createApp(): Promise<INestApplication> {
  const app = await NestFactory.create(AppModule, {
    cors: true,
  });
  setupBaseConfigurations(app);
  setupSwagger(app);

  return app;
}
async function bootstrap() {
  const app = await createApp();

  useContainer(app.select(AppModule), { fallbackOnErrors: true });

  const configService = app.get(ConfigService);

  await app.listen(configService.get('PORT') || 3000);
}

// eslint-disable-next-line unicorn/prefer-top-level-await
void bootstrap().then();
