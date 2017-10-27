import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppTranslationModule } from '../../app.translation.module';
import { NgaModule } from '../../theme/nga.module';

import { Countries } from './countries';
import { EmedService } from '../.././api/api';
import { routing }       from './countries.routing';

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
    Countries    
  ],
  providers: [
    EmedService    
  ]
})
export class CountriesModule {}
