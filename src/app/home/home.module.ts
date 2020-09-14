import { RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { NgModule } from '@angular/core';
import { HomeRoutes } from './home.routing';

@NgModule({
    declarations:[
        HomeComponent
    ],
    imports: [
        RouterModule.forChild(HomeRoutes)
    ],
    exports:[
        RouterModule
    ]
})

export class HomeModule{}