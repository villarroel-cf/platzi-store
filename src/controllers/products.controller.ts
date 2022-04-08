import { Controller, Get, Query, Param } from '@nestjs/common';

@Controller('products')
export class ProductsController {
  @Get(':id')
  /*getProduct(@Param() params: any) {
    return `Product ${params.id}`;
  }*/
  getProduct(@Param('id') id: string) {
    return `Product ${id}`;
  }
  @Get()
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
