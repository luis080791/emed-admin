import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppTranslationModule } from '../../app.translation.module';
import { NgaModule } from '../../theme/nga.module';

import { SpecificNeedle } from './specific_needle';
import { EmedService } from '../.././api/api';
import { routing }       from './specific_needle.routing';

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
    SpecificNeedle
  ],
  providers: [
    EmedService
  ]
})
export class SpecificNeedleModule {}
