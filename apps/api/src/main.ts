/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 **/
import { environment } from './environments/environment.prod';
if (environment.runtime_env === 'prod') {
  require('@google-cloud/trace-agent').start();
}
import { NestFactory } from '@nestjs/core';

import { AppModule } from './app/app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix(`api`);
  const port = process.env.port || 8080;
  await app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}`);
  });
}

bootstrap();
