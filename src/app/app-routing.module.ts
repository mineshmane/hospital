import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppointmentComponent } from './component/appointment/appointment.component';
import { HomeComponent } from './component/home/home.component';


const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'apoint' , component:AppointmentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
