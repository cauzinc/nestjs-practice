import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
// import { RBACInterceptor } from './interceptor/rbac.interceptor'

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // app.useGlobalInterceptors(new RBACInterceptor())
  await app.listen(3000);
}
bootstrap();
