import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TinderLikePage } from './tinder-like.page';

const routes: Routes = [
  {
    path: '',
    component: TinderLikePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TinderLikePageRoutingModule {}
