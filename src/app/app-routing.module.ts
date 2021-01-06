import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { MembersComponent } from './members/members.component';
import { MyProfileComponent } from './my-profile/my-profile.component';


const routes: Routes = [
  {
    path: 'members',
    component: MembersComponent
  },
  {
    path: 'members/create',
    component: EditProfileComponent
  },
  {
    path: 'members/:id',
    component: MyProfileComponent
  },
  {
    path: 'members/:id/refresh',
    component: MyProfileComponent
  },
  {
    path: 'members/:id/edit',
    component: EditProfileComponent
  },
  {
    path: '',
    redirectTo: '/members',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
