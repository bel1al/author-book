import { INestApplication } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

import { version } from '../../../../package.json';

export function setupSwagger(app: INestApplication): void {
  const swaggerOptions = new DocumentBuilder()
    .setTitle('Doculink Main Rest API')
    .setDescription('Documentation for Doculink Main Rest Api')
    .setVersion(version)
    .addBearerAuth(
      {
        type: 'http',
        scheme: 'bearer',
        bearerFormat: 'JWT',
        name: 'JWT',
        description: 'Enter JWT token',
        in: 'header',
      },
      'JWT-auth'
    )
    .build();
  const document = SwaggerModule.createDocument(app, swaggerOptions);

  SwaggerModule.setup('/api/documentation', app, document);
}
