import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppTranslationModule } from '../../app.translation.module';
import { NgaModule } from '../../theme/nga.module';

import { Drugs } from './drugs';
import { EmedService } from '../.././api/api';
import { routing }       from './drugs.routing';

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
    Drugs
  ],
  providers: [
    EmedService
  ]
})
export class DrugsModule {}
