import { repl } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const replServer = await repl(AppModule);
  replServer.setupHistory('.nestjs_repl_hostory', (err) => {
    if (err) {
      console.log(err);
    }
  });
}

bootstrap();
