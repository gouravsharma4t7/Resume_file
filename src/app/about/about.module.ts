import { RouterModule } from '@angular/router';
import { AboutComponent } from './about.component';
import { NgModule } from '@angular/core';
import { AboutRoutes } from './about.routing';

@NgModule({
    declarations:[
        AboutComponent
    ],
    imports: [
        RouterModule.forChild(AboutRoutes)
    ],
    exports:[
        RouterModule
    ]
})

export class AboutModule{}