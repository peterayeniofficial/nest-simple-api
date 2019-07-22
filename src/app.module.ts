import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose'

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './products/products.module';
import { from } from 'rxjs';

@Module({
  imports: [
    ProductsModule, 
    MongooseModule.forRoot(
      'mongodb://localhost/nest-api')],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
