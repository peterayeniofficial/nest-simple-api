import { Module } from "@nestjs/common";
import { MongooseModule } from '@nestjs/mongoose';

import { ProductsController } from './products.controllers';
import { ProductService } from './products.service';
import { ProductSchema } from './products.model';


@Module({
    imports: [MongooseModule.forFeature([{name: 'Product', schema: ProductSchema}])],
    controllers: [ProductsController],
    providers: [ProductService]
})

export class ProductsModule {}