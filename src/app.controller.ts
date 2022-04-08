import { Controller, Get, Param, Query } from '@nestjs/common';
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

  @Get('products')
  /*getProducts(@Query() params: any) {
    const { limit, offset } = params;
    return `Products limit=> ${limit} offset => ${offset}`;
  }*/
  getProducts(
    @Query('limit') limit = 100,
    @Query('offset') offset = 0,
    @Query('brand') brand: string,
  ) {
    return `Products limit=> ${limit} offset => ${offset} marca => ${brand}`;
  }
}
