import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {MDBBootstrapModule} from 'angular-bootstrap-md';
import {FormsModule} from '@angular/forms';

import {AppRoutingModule, routingComponents} from './app-routing.module';

import {AppComponent} from './app.component';
import {ItemComponent} from './item-list/item/item.component';
import {FilterPipe} from './filter.pipe';
import { ItemDetailsComponent } from './item-list/item-details/item-details.component';
import {ItemService} from './item-list/item-service';


@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    ItemComponent,
    FilterPipe,
    ItemDetailsComponent
  ],
  imports: [
    BrowserModule,
    MDBBootstrapModule.forRoot(),
    AppRoutingModule,
    FormsModule
  ],
  providers: [ItemService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
