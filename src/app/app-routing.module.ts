import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { AboutComponent } from './about/about.component';
// import { AuthComponent } from './auth/auth.component';

const routes: Routes = [

 {
    path: '', 
    component: LayoutComponent,
    children:[
      {
        path:'',
        redirectTo:'home',
        pathMatch:'full'
      },
      {
        path:'',
        loadChildren:'./home/home.module#HomeModule'
      },
      {
        path: '',
        loadChildren:'./about/about.module#AboutModule'
      },
      {
        path: '',
        loadChildren:'./form/form.module#FormModule'
      },
      {
        path: '',
        loadChildren: './glry/glry.module#GlryModule'
      },
      // {
      //   path: '',
      //   loadChildren: './contact/contact.module#ContactModule'
      // }
    ]
  }
  // {
  //   path: '', 
  //   component: AuthComponent,
  //   children:[
      
  //     {
  //       path:'',
  //       loadChildren:'./auth/auth.module#AuthModule'
  //     },
      
  //   ]
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
