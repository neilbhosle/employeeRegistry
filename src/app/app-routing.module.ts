import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {} from '../app/employee-dashboard/employee-dashboard.component'
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {path:'Register',component:RegisterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
