import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';

import { AdminGuard } from './admin.guard';

import { ContactComponent } from './contact/contact.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { BlogContentComponent } from './blog-content/blog-content.component';
import { BlogComponent } from './blog/blog.component';

import { LayoutComponent } from './layout/layout.component';




const routes: Routes = [
  {
    path:'',
    component: LayoutComponent,
    
    children: [
      {
        path:'',
        redirectTo: '/home',
        pathMatch: 'full',
      },
      {
        path: 'home',
        loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
      },
      {
        path: 'contact',
        canActivate: [AdminGuard],
        loadChildren: () => import('./contact/contact.module').then(m => m.ContactModule)
      },  
      {
        path: 'blog',
        canActivate: [AdminGuard],
        loadChildren: () => import('./blog/blog.module').then(m => m.BlogModule)  
      },      
    ]
  },
 
   {
    path:'**',
    loadChildren: () => import('./page-not-found/page-not-found.module').then(m => m.PageNotFoundModule)
  }
];



@NgModule({
  imports: [RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules
  } )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
