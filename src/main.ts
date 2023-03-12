import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { TransfromInterceptor } from './interceptor/transfrom.interceptor'

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalInterceptors(new TransfromInterceptor())
  await app.listen(3000);
}
bootstrap();
