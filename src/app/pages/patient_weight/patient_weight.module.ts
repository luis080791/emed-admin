import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppTranslationModule } from '../../app.translation.module';
import { NgaModule } from '../../theme/nga.module';

import { PatientWeight } from './patient_weight';
import { EmedService } from '../.././api/api';
import { routing }       from './patient_weight.routing';

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
    PatientWeight
  ],
  providers: [
    EmedService
  ]
})
export class PatientWeightModule {}
