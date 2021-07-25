import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';


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
      path: '',
      component: LayoutComponent, 
      redirectTo: '/home',
      pathMatch: 'full',
  
    },
    {
      path:'home',
      loadChildren: ()=> import('./home/home.module').then(m => m.HomeModule)
      /*  component: HomeComponent,  */
    }, 
    {
      path: 'contact',
      component: ContactComponent,
    },
    {
      path:'blog',
      component: BlogComponent,
  
    },
    {
      path: 'blog/:id',
      component: BlogContentComponent,
    },
    {
      path:'**',
      component: PageNotFoundComponent,
    }

  
  ] 
}  
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules
  } )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
