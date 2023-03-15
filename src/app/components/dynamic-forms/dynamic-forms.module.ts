import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DynamicFormsRoutingModule } from './dynamic-forms-routing.module';
import { InherentRiskAssFormComponent } from './inherent-risk-ass-form/inherent-risk-ass-form.component';
import { InstructionsComponent } from './instructions/instructions.component';


@NgModule({
  declarations: [
    InherentRiskAssFormComponent,
    InstructionsComponent
  ],
  imports: [
    CommonModule,
    DynamicFormsRoutingModule
  ]
})
export class DynamicFormsModule { }
