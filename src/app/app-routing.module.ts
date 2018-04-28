import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ItemListComponent} from './item-list/item-list.component';
import {DetailsComponent} from './details/details.component';
import {ItemDetailsComponent} from './item-list/item-details/item-details.component';

const routes: Routes = [
  {
    path: '', component: ItemListComponent
  },
  {
    path: 'details', component: DetailsComponent
  },
  {
    path: 'details/:id', component: ItemDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
export const routingComponents = [ItemListComponent, DetailsComponent, ItemDetailsComponent]
