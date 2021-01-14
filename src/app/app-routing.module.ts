import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BdayComponent } from 'src/app/bday/bday.component';
import { MessageComponent } from 'src/app/message/message.component';


const routes: Routes = [
  { path: "", component : BdayComponent},
  { path: "home", component : BdayComponent},
  { path: "happy", component : MessageComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
