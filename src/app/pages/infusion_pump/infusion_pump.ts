import {Component} from '@angular/core';

import { EmedService } from '../.././api/api';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'infusion_pump',
  styleUrls: ['./infusion_pump.scss'],
  templateUrl: './infusion_pump.html'
})
export class InfusionPump {

  fd: string = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJkYXRhIjp7InVzZXJJZCI6NH19.X4CIOj2KBb_QkdtvLmByTAgSAsyM0pxIj80dxXN6TOk';
  infusions: object = [];
  infusion_name: string = '';
  infusion_id: string = '';
  refinfusion: string;
  keyAction: string;

  constructor(private apiService: EmedService, private modalService: NgbModal) {
    this.getInfusions(); 
  }

  //Modals Functions
  openModal(infusion, key, id, description) {    
    this.keyAction = key;
    if(id == undefined){
      $('#infusion').modal('show');
    }else{
      this.infusion_name = description;
      this.infusion_id = id;
      $('#infusion').modal('show');
    }
  }

  saveInfusion(){
    if(this.infusion_name == ''){
      alert('Empty field')
    }else{
      if(this.keyAction == 'add'){
          this.apiService._postInfusionPump(this.fd, this.infusion_name)
          .then(response =>{
            if(response.error){
              alert(response.error.message);
              this.infusion_name = '';
            }else{
              this.getInfusions();
              $('#infusion').modal('hide');
              this.infusion_name = '';
            }
          })
      }else{
        this.apiService._putInfusionPump(this.fd, this.infusion_id, this.infusion_name)
        .then(response =>{
          if(response.error){
            alert(response.error.message);
            this.infusion_name = '';
          }else{
            this.getInfusions();
            $('#infusion').modal('hide');
            this.infusion_name = '';
          }
        })
      }
    }
  }
  
  deleteinfusions(){
    this.apiService._delInfusionPump(this.fd, this.infusion_id)
    .then(response =>{
      if(response.error){
        alert(response.error.message);
        this.infusion_name = '';
      }else{
        this.getInfusions();
        $('#infusion').modal('hide');
        this.infusion_name = '';
        this.infusion_id = '';
      }
    })
  }



  //Automatic services
  getInfusions(){ 
    let list = [];
    this.apiService._getInfusionPump(this.fd)
    .then(response =>{
        response.forEach((e) => {
          /*if(e.active == true){
            list.push(e)
          }*/
          list.push(e)
        });
        this.infusions = list;  
    })
  }

}
