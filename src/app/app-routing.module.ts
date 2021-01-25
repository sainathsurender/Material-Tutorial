import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: 'Home1', loadChildren: () => import('./Components/home1/home1.module').then(m => m.Home1Module) },
  { path: 'Home2', loadChildren: () => import('./Components/home2/home2.module').then(m => m.Home2Module) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
