import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultLayoutContainerComponent } from './container/default-layout-container/default-layout-container.component';

const routes: Routes = [
  {
    path:'',
    component: DefaultLayoutContainerComponent,
    children:[
      {
        path:'',
        loadChildren: () => import('./components/dynamic-forms/dynamic-forms.module').then(dForms => dForms.DynamicFormsModule),
        data:{
          breadcrumb: []
        }
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
