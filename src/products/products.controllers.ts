import { Controller, Post, Body, Get, Param, Patch, Delete } from '@nestjs/common'
import { ProductService } from './products.service';
import { async } from 'rxjs/internal/scheduler/async';

@Controller('products')
export class ProductsController {
    constructor(private readonly productService: ProductService) {}
    @Post()
    async addProduct(
        @Body('title') prodTitle: string,
        @Body('description') prodDesc: string,
        @Body('price') prodPrice: number
    ){
        const generatedId = await this.productService.insertProduct(
            prodTitle, 
            prodDesc, 
            prodPrice
        );
        return { id: generatedId }
    }

    @Get()
    async getAllProducts() {
        const products = await this.productService.getProducts()
        return products
    }

    @Get(':id')
    getProduct(@Param('id') prodId: string) {
        return this.productService.getASingleProduct(prodId)

    }

    @Patch(':id')
    async updateProduct(
        @Param('id') prodId: string,
        @Body('title') prodTitle: string,
        @Body('description') prodDesc: string,
        @Body('price') prodPrice: number
    ){
        await this.productService.updateProduct(prodId, prodTitle, prodDesc, prodPrice)
        return null
    }

    @Delete(':id')
    async removeProduct(@Param('id') prodId: string) {
        await this.productService.deleteProduct(prodId)
        return null
    }
}