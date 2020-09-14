import { RouterModule } from '@angular/router';
import { FormtComponent } from './form.component';
import { NgModule } from '@angular/core';
import { FormRoutes } from './form.routing';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
    declarations:[
        FormtComponent
    ],
    imports: [
        ReactiveFormsModule,
        RouterModule.forChild(FormRoutes)
    ],
    exports:[
        RouterModule
    ]
})

export class FormModule{}