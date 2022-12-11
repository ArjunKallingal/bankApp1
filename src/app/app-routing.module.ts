import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashBoardComponent } from './dash-board/dash-board.component';
import { LoginComponent } from './login/login.component';
import { RegesterComponent } from './regester/regester.component';
import { TransationComponent } from './transation/transation.component';

const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'dashboard',component:DashBoardComponent},
  {path:'regester',component:RegesterComponent},
  {path:'transation',component:TransationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
