import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Have to import actual components for routing 
import { PhoneListComponent } from './phone-list/phone-list.component';
import { PhoneDetailsComponent } from './phone-details/phone-details.component';

const routes: Routes = [
  {
    path: '',
    component: PhoneListComponent,
  },
  {
    path: 'phone/:id',
    component: PhoneDetailsComponent,
  },
  {
    path: '**',//Everything
    redirectTo: '',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
