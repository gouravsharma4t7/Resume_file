import { RouterModule } from '@angular/router';
import { GlryComponent } from './glry.component';
import { NgModule } from '@angular/core';
import { GlryRoutes } from './glry.routing';



@NgModule({
    declarations:[
        GlryComponent
    ],
    imports: [
  
        RouterModule.forChild(GlryRoutes)
    ],
    exports:[
        RouterModule
    ]
})

export class GlryModule{}