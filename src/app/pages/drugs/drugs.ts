import {Component} from '@angular/core';

import { EmedService } from '../.././api/api';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'drugs',
  styleUrls: ['./drugs.scss'],
  templateUrl: './drugs.html'
})
export class Drugs {

  fd: string = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJkYXRhIjp7InVzZXJJZCI6NH19.X4CIOj2KBb_QkdtvLmByTAgSAsyM0pxIj80dxXN6TOk';
  countries: object = [];
  country_name: string = '';
  country_id: string = '';
  refCountry: string;
  keyAction: string;

  constructor(private apiService: EmedService, private modalService: NgbModal) {
    this.getCountries(); 
  }




  //Automatic services
  getDrugs(){
    let list = [];
    this.apiService._getDrugs(this.fd)
    .then(response =>{
        response.forEach((e) => {
          if(e.active == true){
            list.push(e)
          }
        });
        this.countries = list;    
    })
  }

}
