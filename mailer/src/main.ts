import {NestFactory} from '@nestjs/core';
import {MicroserviceOptions, TcpOptions, Transport} from '@nestjs/microservices';

import {AppMailerModule} from './mailer.module';
import {ConfigService} from './services/config/config.service';

async function bootstrap() {
    const app = await NestFactory.createMicroservice<MicroserviceOptions>(
        AppMailerModule,
        {
            transport: Transport.TCP,
            options: {
                host: '0.0.0.0',
                port: new ConfigService().get('port'),
            },
        } as TcpOptions);
    await app.listen();
}

bootstrap();
