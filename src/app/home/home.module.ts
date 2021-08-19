import { NgModule } from '@angular/core';

import { HomeComponent } from './components/home.component';
import { CommonModule } from '@angular/common'
import { SharedModule } from './../shared/shared.module';
import { HomeRoutingModule } from './home-routing.module';

import { MaterialModule } from './../material/material.module';

@NgModule({
    declarations: [
        HomeComponent
    ],
    imports: [
        HomeRoutingModule,
        SharedModule,
        CommonModule,
        MaterialModule
    ]
})

export class HomeModule {

}