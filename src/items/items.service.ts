import { Injectable } from '@nestjs/common';
import { Item } from './interfaces/item.interface'

@Injectable()
export class ItemsService {
  private readonly items: Item[] = [
    {
      id: '123',
      name: 'Meat',
      description: 'Delicious Meat',
      quantity: 98
    },
    {
      id: '124',
      name: 'Eggs',
      description: 'Delicious Eggs',
      quantity: 14
    },
    {
      id: '125',
      name: 'Milk',
      description: 'Delicious Milk',
      quantity: 6
    }
  ]

  findAll(): Item[] {
    return this.items
  }

  findOne(id: string): Item {
    return this.items.find(item => item.id === id)
  }
}
