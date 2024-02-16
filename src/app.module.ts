import { Module } from '@nestjs/common';
// import { AppController } from './app.controller';
// import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { dataSourceOptions } from 'db/data-source';
import { UsersModule } from './users/users.module';

@Module({
  // import database connection
  imports: [TypeOrmModule.forRoot(dataSourceOptions), UsersModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
