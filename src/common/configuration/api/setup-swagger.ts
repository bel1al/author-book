import { INestApplication } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

import { version } from '../../../../package.json';

export function setupSwagger(app: INestApplication): void {
  const swaggerOptions = new DocumentBuilder()
    .setTitle('Author-Book Main Rest API')
    .setDescription('Documentation for Author-Book Main Rest Api')
    .setVersion(version)
    .build();
  const document = SwaggerModule.createDocument(app, swaggerOptions);

  SwaggerModule.setup('/api/documentation', app, document);
}
