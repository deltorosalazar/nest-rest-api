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
  async getAll(): Promise<Item[]> {
    return this.itemsService.findAll()
  }

  @Get(':id')
  async findOne(@Param() param): Promise<Item> {
    return this.itemsService.findOne(param.id)
  }

  @Post()
  async create(@Body() createItemDTO: CreateItemDTO): Promise<Item> {
    return this.itemsService.create(createItemDTO)
  }

  @Put(':id')
  async update(
    @Body() updateItemDTO: CreateItemDTO,
    @Param() param
  ): Promise<Item> {
    return this.itemsService.update(param.id, updateItemDTO)
  }

  @Delete(':id')
  async delete(@Param('id') id): Promise<Item> {
    return this.itemsService.delete(id)
  }
}
