/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 **/
import { environment } from './environments/environment';
if (environment.runtime_env === 'prod') {
  require('@google-cloud/trace-agent').start();
}
if (environment.runtime_env === 'local') {
  require('dotenv').config();
}

import { NestFactory } from '@nestjs/core';

import { AppModule } from './app/app.module';

process.on('unhandledRejection', error => {
  // Will print "unhandledRejection err is not defined"
  console.log('unhandledRejection', error.message);
});

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix(`api`);
  const port = process.env.port || 8080;
  await app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}`);
  });
}

bootstrap();
