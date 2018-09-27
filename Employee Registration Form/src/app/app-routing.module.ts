import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmpformComponent } from './empform/empform.component';
import { DisplayComponent } from './display/display.component';

const routes: Routes = [
  {
    path: '',
    component: EmpformComponent
  },
  {
    path: 'display',
    component: DisplayComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
