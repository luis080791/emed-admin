import { Routes, RouterModule }  from '@angular/router';
import { Pages } from './pages.component';
import { ModuleWithProviders } from '@angular/core';
// noinspection TypeScriptValidateTypes

// export function loadChildren(path) { return System.import(path); };

export const routes: Routes = [
  {
    path: 'pages',
    component: Pages,
    children: [
      { path: '', redirectTo: 'countries', pathMatch: 'full' },
      { path: 'countries', loadChildren: './countries/countries.module#CountriesModule' },
      { path: 'drugs', loadChildren: './drugs/drugs.module#DrugsModule' },
      { path: 'patient_weight', loadChildren: './patient_weight/patient_weight.module#PatientWeightModule' },
      { path: 'infusion_pump', loadChildren: './infusion_pump/infusion_pump.module#InfusionPumpModule' },
      { path: 'needle_gauge', loadChildren: './needle_gauge/needle_gauge.module#NeedleGaugeModule' },
      { path: 'number_needle', loadChildren: './number_needle/number_needle.module#NumberNeedleModule' },
      { path: 'specific_needle', loadChildren: './specific_needle/specific_needle.module#SpecificNeedleModule' },
      { path: 'position', loadChildren: './position/position.module#PositionModule' },
    ]
  }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
