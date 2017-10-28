import {Component} from '@angular/core';

import { EmedService } from '../.././api/api';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'patient_weight',
  styleUrls: ['./patient_weight.scss'],
  templateUrl: './patient_weight.html'
})
export class PatientWeight {

  fd: string = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJkYXRhIjp7InVzZXJJZCI6NH19.X4CIOj2KBb_QkdtvLmByTAgSAsyM0pxIj80dxXN6TOk';
  pWeights: object = [];
  pWeight_name: string = '';
  pWeight_id: string = '';
  keyAction: string;

  constructor(private apiService: EmedService, private modalService: NgbModal) {
    this.getPWeights(); 
  }

  //Modals Functions
  openModal(needleG, key, id, description) {    
    this.keyAction = key;
    if(id == undefined){
      $('#pWeight').modal('show');
    }else{
      this.pWeight_name = description;
      this.pWeight_id = id;
      $('#pWeight').modal('show');
    }
  }

  savePWeight(){
    if(this.pWeight_name == ''){
      alert('Empty field')
    }else{
      if(this.keyAction == 'add'){
          this.apiService._postPatientWeight(this.fd, this.pWeight_name)
          .then(response =>{
            if(response.error){
              alert(response.error.message);
              this.pWeight_name = '';
            }else{
              this.getPWeights();
              $('#pWeight').modal('hide');
              this.pWeight_name = '';
            }
          })
      }else{
        this.apiService._putPatientWeight(this.fd, this.pWeight_id, this.pWeight_name)
        .then(response =>{
          if(response.error){
            alert(response.error.message);
            this.pWeight_name = '';
          }else{
            this.getPWeights();
            $('#pWeight').modal('hide');
            this.pWeight_name = '';
          }
        })
      }
    }
  }
  
  deleteneedleGs(){
    this.apiService._delPatientWeight(this.fd, this.pWeight_id)
    .then(response =>{
      if(response.error){
        alert(response.error.message);
        this.pWeight_name = '';
      }else{
        this.getPWeights();
        $('#pWeight').modal('hide');
        this.pWeight_name = '';
        this.pWeight_id = '';
      }
    })
  }



  //Automatic services
  getPWeights(){ 
    let list = [];
    this.apiService._getPatientWeight(this.fd)
    .then(response =>{
        response.forEach((e) => {
          /*if(e.active == true){
            list.push(e)
          }*/
          list.push(e)
        });
        this.pWeights = list;  
    })
  }


}
