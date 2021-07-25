import { NgModule } from '@angular/core';

import { HomeComponent } from './home/home.component';
import { CommonModule } from '@angular/common'
import { SharedModule } from './../shared/shared.module';
import { HomeRoutingModule } from './home-routing.module';

@NgModule({
    declarations: [
        HomeComponent
    ],
    imports: [
        HomeRoutingModule,
        SharedModule,
        CommonModule
    ]
})

export class HomeModule {

}