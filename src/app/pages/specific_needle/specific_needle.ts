import {Component} from '@angular/core';

import { EmedService } from '../.././api/api';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'specific_needle',
  styleUrls: ['./specific_needle.scss'],
  templateUrl: './specific_needle.html'
})
export class SpecificNeedle {

  fd: string = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJkYXRhIjp7InVzZXJJZCI6NH19.X4CIOj2KBb_QkdtvLmByTAgSAsyM0pxIj80dxXN6TOk';
  sNeedles: object = [];
  sNeedle_name: string = '';
  sNeedle_id: string = '';
  keyAction: string;

  constructor(private apiService: EmedService, private modalService: NgbModal) {
    this.getSNeedles(); 
  }

  //Modals Functions
  openModal(needleG, key, id, description) {    
    this.keyAction = key;
    if(id == undefined){
      $('#sNeedle').modal('show');
    }else{
      this.sNeedle_name = description;
      this.sNeedle_id = id;
      $('#sNeedle').modal('show');
    }
  }

  saveSNeedle(){
    if(this.sNeedle_name == ''){
      alert('Empty field')
    }else{
      if(this.keyAction == 'add'){
          this.apiService._postSpecificNeedle(this.fd, this.sNeedle_name)
          .then(response =>{
            if(response.error){
              alert(response.error.message);
              this.sNeedle_name = '';
            }else{
              this.getSNeedles();
              $('#sNeedle').modal('hide');
              this.sNeedle_name = '';
            }
          })
      }else{
        this.apiService._putSpecificNeedle(this.fd, this.sNeedle_id, this.sNeedle_name)
        .then(response =>{
          if(response.error){
            alert(response.error.message);
            this.sNeedle_name = '';
          }else{
            this.getSNeedles();
            $('#sNeedle').modal('hide');
            this.sNeedle_name = '';
          }
        })
      }
    }
  }
  
  deleteSNeedle(){
    this.apiService._delSpecificNeedle(this.fd, this.sNeedle_id)
    .then(response =>{
      if(response.error){
        alert(response.error.message);
        this.sNeedle_name = '';
      }else{
        this.getSNeedles();
        $('#sNeedle').modal('hide');
        this.sNeedle_name = '';
        this.sNeedle_id = '';
      }
    })
  }



  //Automatic services
  getSNeedles(){ 
    let list = [];
    this.apiService._getSpecificNeedle(this.fd)
    .then(response =>{
        response.forEach((e) => {
          /*if(e.active == true){
            list.push(e)
          }*/
          list.push(e)
        });
        this.sNeedles = list;  
    })
  }

}
