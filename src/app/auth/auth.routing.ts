import { Router, Routes } from '@angular/router';
import { RegistrationComponent } from './ragistration/registration.component';
import { LoginComponent } from './login/LoginComponent';


export const AuthRoutes: Routes = [{
    
            path: '',
            children:[

                {
                    path: 'login',
                    loadChildren: './auth/login/login.module#LoginModule'
                },
                {
                    path: 'registration',
                    loadChildren: './auth/registration/registration.module#RegistrationModule'
                }
            ]

}]