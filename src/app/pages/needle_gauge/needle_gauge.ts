import {Component} from '@angular/core';

import { EmedService } from '../.././api/api';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'needle_gauge',
  styleUrls: ['./needle_gauge.scss'],
  templateUrl: './needle_gauge.html'
})
export class NeedleGauge {

  fd: string = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJkYXRhIjp7InVzZXJJZCI6NH19.X4CIOj2KBb_QkdtvLmByTAgSAsyM0pxIj80dxXN6TOk';
  needleGs: object = [];
  needleG_name: string = '';
  needleG_id: string = '';
  keyAction: string;

  constructor(private apiService: EmedService, private modalService: NgbModal) {
    this.getNeedleGs(); 
  }

  //Modals Functions
  openModal(needleG, key, id, description) {    
    this.keyAction = key;
    if(id == undefined){
      $('#needleG').modal('show');
    }else{
      this.needleG_name = description;
      this.needleG_id = id;
      $('#needleG').modal('show');
    }
  }

  saveNeedleG(){
    if(this.needleG_name == ''){
      alert('Empty field')
    }else{
      if(this.keyAction == 'add'){
          this.apiService._postNeedleGauge(this.fd, this.needleG_name)
          .then(response =>{
            if(response.error){
              alert(response.error.message);
              this.needleG_name = '';
            }else{
              this.getNeedleGs();
              $('#needleG').modal('hide');
              this.needleG_name = '';
            }
          })
      }else{
        this.apiService._putNeedleGauge(this.fd, this.needleG_id, this.needleG_name)
        .then(response =>{
          if(response.error){
            alert(response.error.message);
            this.needleG_name = '';
          }else{
            this.getNeedleGs();
            $('#needleG').modal('hide');
            this.needleG_name = '';
          }
        })
      }
    }
  }
  
  deleteneedleGs(){
    this.apiService._delNeedleGauge(this.fd, this.needleG_id)
    .then(response =>{
      if(response.error){
        alert(response.error.message);
        this.needleG_name = '';
      }else{
        this.getNeedleGs();
        $('#needleG').modal('hide');
        this.needleG_name = '';
        this.needleG_id = '';
      }
    })
  }



  //Automatic services
  getNeedleGs(){ 
    let list = [];
    this.apiService._getNeedleGauge(this.fd)
    .then(response =>{
        response.forEach((e) => {
          /*if(e.active == true){
            list.push(e)
          }*/
          list.push(e)
        });
        this.needleGs = list;  
    })
  }

}
