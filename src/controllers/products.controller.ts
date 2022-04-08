import {
  Controller,
  Get,
  Query,
  Param,
  Post,
  Body,
  Put,
  Delete,
} from '@nestjs/common';

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

  @Post()
  create(@Body() payload: any) {
    return {
      message: 'Accion de crear',
      payload,
    };
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() payload: any) {
    return {
      id,
      payload,
    };
  }

  @Delete(':id')
  delte(@Param('id') id: number) {
    return {
      id,
    };
  }
}
