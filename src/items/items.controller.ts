import { CreateItemDTO } from './dto/create-item.dto'
import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common'
import { ItemsService } from './items.service';
import { Item } from './interfaces/item.interface';

@Controller('items')
export class ItemsController {
  constructor(
    private readonly itemsService: ItemsService
  ) {}

  @Get()
  getAll(): Item[] {
    return this.itemsService.findAll()
  }

  @Get(':id')
  findOne(@Param() param): Item {
    return this.itemsService.findOne(param.id)
  }

  @Post()
  create(@Body() createItemDTO: CreateItemDTO): object {
    return {
      name: createItemDTO.name,
      description: createItemDTO.description,
      quantity: createItemDTO.quantity,
    }
  }

  @Put(':id')
  update(
    @Body() createItemDTO: CreateItemDTO,
    @Param() param
  ): string {
    return param.id
  }

  @Delete(':id')
  delete(@Param('id') id):string {
    return id
  }
}
