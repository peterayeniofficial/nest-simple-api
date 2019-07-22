import { Controller, Post, Body } from '@nestjs/common'
import { ProductService } from './products.service';

@Controller('products')
export class ProductsController {
    constructor(private readonly productService: ProductService) {}
    @Post()
    addProduct(
        @Body('title') prodTitle: string,
        @Body('description') prodDesc: string,
        @Body('price') prodPrice: number
    ){
        const generatedId = this.productService.insertProduct(
            prodTitle, 
            prodDesc, 
            prodPrice
        );
        return { id: generatedId }
    }
}