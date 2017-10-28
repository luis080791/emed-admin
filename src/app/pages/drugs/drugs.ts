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
  drugs: object = [];
  drug_name: string = '';
  drug_id: string = '';
  keyAction: string;

  constructor(private apiService: EmedService, private modalService: NgbModal) {
    this.getDrugs(); 
  }

  //Modals Functions
  openModal(drug, key, id, description) {    
    this.keyAction = key;
    if(id == undefined){
      $('#drug').modal('show');
    }else{
      this.drug_name = description;
      this.drug_id = id;
      $('#drug').modal('show');
    }
  }

  saveDrugs(){
    if(this.drug_name == ''){
      alert('Empty field')
    }else{
      if(this.keyAction == 'add'){
          this.apiService._postDrugs(this.fd, this.drug_name)
          .then(response =>{
            if(response.error){
              alert(response.error.message);
              this.drug_name = '';
            }else{
              this.getDrugs();
              $('#drug').modal('hide');
              this.drug_name = '';
            }
          })
      }else{
        this.apiService._putDrugs(this.fd, this.drug_id, this.drug_name)
        .then(response =>{
          if(response.error){
            alert(response.error.message);
            this.drug_name = '';
          }else{
            this.getDrugs();
            $('#drug').modal('hide');
            this.drug_name = '';
          }
        })
      }
    }
  }
  
  deleteDrugs(){
    this.apiService._delDrugs(this.fd, this.drug_id)
    .then(response =>{
      if(response.error){
        alert(response.error.message);
        this.drug_name = '';
      }else{
        this.getDrugs();
        $('#drug').modal('hide');
        this.drug_name = '';
        this.drug_id = '';
      }
    })
  }



  //Automatic services
  getDrugs(){ 
    let list = [];
    this.apiService._getDrugs(this.fd)
    .then(response =>{
        response.forEach((e) => {
          /*if(e.active == true){
            list.push(e)
          }*/
          list.push(e)
        });
        this.drugs = list;  
    })
  }

}
