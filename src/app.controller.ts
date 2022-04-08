import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  @Get('nuevo')
  newEndpoint() {
    return 'yo soy nuevo';
  }

  @Get('/ruta/')
  hello() {
    return 'con/sas/';
  }

  @Get('/products/:id')
  /*getProduct(@Param() params: any) {
    return `Product ${params.id}`;
  }*/
  getProduct(@Param('id') id: string) {
    return `Product ${id}`;
  }

  @Get('/categories/:id/products/:productId')
  getCategory(@Param('id') id: string, @Param('productId') productId: string) {
    return `category ${id} and product ${productId}`;
  }
}
