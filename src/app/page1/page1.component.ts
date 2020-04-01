import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.scss']
})
export class Page1Component implements OnInit {
 
  constructor() { }
 
  ngOnInit(): void {  }

  orderForm = new FormGroup({
    serviceTypes: new FormControl('',[ Validators.required ]),
    businessFunctions: new FormControl('', [ Validators.required ])
  });

  getOrders(){
    console.log(this.orderForm);
    
    //   this.orderForm.setErrors({
    //     allFieldsRequired: true
    // });
    this.orderForm.reset();
  }


	 serviceTypes = [
          { "id": 1, "type": "GEA-FTTC-ST (FTTC)"},
          { "id": 2, "type": "SOGEA-FTTC (FTTC)" },
          { "id": 3, "type": "GEA-VO-FTTP (FTTP)"},
          { "id": 4, "type": "GEA-VO-FTTP (FTTP)"},
          { "id": 5, "type": "FVA (FVA)"},
          { "id": 6, "type": "COPPER LINE"}
       ];

businessFunctions = [
                { "id": 1, "function": "Test-On-Provision"},
                { "id": 2, "function": "Test-On-Repair"},
                { "id": 3,  "function": "Test-On-Clousure"},
                { "id": 4, "function": "In-Life-Fault-Test"},
                { "id": 5, "function": "Others"}
          ];


          technologies = [
                            { "id": 1, "name": ["VDSL", "G FAST", "Others"]  }
                        ];


}
