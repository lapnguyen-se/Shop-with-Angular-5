import {Item} from './item.model';
import {Injectable} from '@angular/core';

@Injectable()
export class ItemService {
  private loremString = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum';
  private items: Item[] = [
    new Item(0, 'Item A', this.loremString, 'http://placehold.it/200x200'),
    new Item(1, 'Item B', this.loremString, 'http://placehold.it/200x200'),
    new Item(2, 'Item C', this.loremString, 'http://placehold.it/200x200'),
    new Item(3, 'Item D', this.loremString, 'http://placehold.it/200x200')
  ];

  constructor() {
  }

  getItems() {
    return this.items;
  }

  getItem(id: number) {
    return this.items[id];
  }
}
