import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InherentRiskAssFormComponent } from './inherent-risk-ass-form/inherent-risk-ass-form.component';
import { InstructionsComponent } from './instructions/instructions.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'inherentRiskAssesment',
    pathMatch:'full'
  },
  {
    path: 'inherentRiskAssesment',
    component: InherentRiskAssFormComponent,
    data:{
      breadcrumb: []
    }
  },
  {
    path: 'instructions',
    component: InstructionsComponent,
    data:{
      breadcrumb: []
    }
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DynamicFormsRoutingModule { }
