import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TinderLikePageRoutingModule } from './tinder-like-routing.module';

import { TinderLikePage } from './tinder-like.page';
import { TinderUiComponent } from '../component/tinder-ui/tinder-ui.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TinderLikePageRoutingModule,
    
  ],
  declarations: [TinderLikePage,TinderUiComponent],
  providers:[TinderUiComponent]
})
export class TinderLikePageModule {}
