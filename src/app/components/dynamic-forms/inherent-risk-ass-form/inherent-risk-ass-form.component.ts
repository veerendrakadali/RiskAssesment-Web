import { Component, OnInit } from '@angular/core';
import { FormService } from 'src/app/services/form.service';

@Component({
  selector: 'app-inherent-risk-ass-form',
  templateUrl: './inherent-risk-ass-form.component.html',
  styleUrls: ['./inherent-risk-ass-form.component.scss']
})
export class InherentRiskAssFormComponent implements OnInit {

  formData:any=null;
  constructor(private formService:FormService) { }

  ngOnInit(): void {
    this.getData();
  }

  getData(){
    this.formService.getJSONData().subscribe(res=>{
      this.formData=res;
    });
  }
  
}
