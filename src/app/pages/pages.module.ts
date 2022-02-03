import { SharedModule } from './../shared/shared.module';
import { RoutingModule } from './routing-page.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MarketplaceComponent } from './marketplace/marketplace.component';



@NgModule({
  declarations: [
    MarketplaceComponent
  ],
  imports: [
    CommonModule,
    RoutingModule,
    SharedModule
  ]
})
export class PagesModule { }
