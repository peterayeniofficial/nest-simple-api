import { Injectable, NotFoundException } from '@nestjs/common';
import { Product } from './products.model';

@Injectable()
export class ProductService {
    private products: Product[] = []

    insertProduct(title: string, desc: string, price: number){
        const prodId = Math.random().toString()
        const newProduct = new Product(prodId, title, desc, price)
        this.products.push(newProduct)
    }

    getProducts() {
        return [...this.products]
    }

    getASingleProduct(productId: string) {
        const product = this.findProduct(productId)[0]
        return { ...product }
        
    }

    updateProduct(productId: string, title: string, desc: string, price: number) {
        const [product, index] = this.findProduct(productId)
        const updatedProduct = {...product}
        if (title) updatedProduct.title = title
        if (desc) updatedProduct.desc = desc
        if (price) updatedProduct.price = price
        this.products[index] = updatedProduct
    }

    deleteProduct(prodId: string) {
        const [_, index] = this.findProduct(prodId)
        this.products.splice(index, 1)
    }

    private findProduct(id: string): [Product, number] {
        const productIndex = this.products.findIndex((prod) => prod.id === id)
        const product = this.products[productIndex]
        if (!product) {
            throw new NotFoundException()
        }
        return [product, productIndex]
    }
}
