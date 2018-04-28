import {Component, OnInit} from '@angular/core';
import {Item} from './item.model';
import {ItemService} from './item-service';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {
  items: Item[];
  searchText: String;

  constructor(private itemService: ItemService) {
  }

  ngOnInit() {
    this.items = this.itemService.getItems();
  }

}
