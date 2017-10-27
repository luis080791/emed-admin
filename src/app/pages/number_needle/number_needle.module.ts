import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppTranslationModule } from '../../app.translation.module';
import { NgaModule } from '../../theme/nga.module';

import { NumberNeedle } from './number_needle';
import { routing }       from './number_needle.routing';

;

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AppTranslationModule,
    NgaModule,
    routing
  ],
  declarations: [    
    NumberNeedle
  ],
  providers: [
    
  ]
})
export class NumberNeedleModule {}
