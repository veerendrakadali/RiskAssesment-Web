import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DynamicFormsRoutingModule } from './dynamic-forms-routing.module';
import { InherentRiskAssFormComponent } from './inherent-risk-ass-form/inherent-risk-ass-form.component';
import { InstructionsComponent } from './instructions/instructions.component';
import { ChartsModule } from 'ng2-charts';
import { DoughnutChartComponent } from './doughnut-chart/doughnut-chart.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxMaskModule, IConfig } from 'ngx-mask';
import { BarChartComponent } from './bar-chart/bar-chart.component';

@NgModule({
  declarations: [
    InherentRiskAssFormComponent,
    InstructionsComponent,
    DoughnutChartComponent,
    BarChartComponent
  ],
  imports: [
    CommonModule,
    DynamicFormsRoutingModule,
    ChartsModule,
    FormsModule,
    ReactiveFormsModule,
    NgxMaskModule.forRoot()
  ]
})
export class DynamicFormsModule { }
