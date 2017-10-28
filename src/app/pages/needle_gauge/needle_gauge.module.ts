import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppTranslationModule } from '../../app.translation.module';
import { NgaModule } from '../../theme/nga.module';

import { NeedleGauge } from './needle_gauge';
import { EmedService } from '../.././api/api';
import { routing }       from './needle_gauge.routing';

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
    NeedleGauge
  ],
  providers: [
    EmedService
  ]
})
export class NeedleGaugeModule {}
