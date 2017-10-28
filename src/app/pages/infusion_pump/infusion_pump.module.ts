import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppTranslationModule } from '../../app.translation.module';
import { NgaModule } from '../../theme/nga.module';

import { InfusionPump } from './infusion_pump';
import { EmedService } from '../.././api/api';
import { routing }       from './infusion_pump.routing';

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
    InfusionPump
  ],
  providers: [
    EmedService
  ]
})
export class InfusionPumpModule {}
