import {Component} from '@angular/core';

import { EmedService } from '../.././api/api';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'number_needle',
  styleUrls: ['./number_needle.scss'],
  templateUrl: './number_needle.html'
})
export class NumberNeedle {

  fd: string = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJkYXRhIjp7InVzZXJJZCI6NH19.X4CIOj2KBb_QkdtvLmByTAgSAsyM0pxIj80dxXN6TOk';
  nNeedles: object = [];
  nNeedle_name: string = '';
  nNeedle_id: string = '';
  keyAction: string;

  constructor(private apiService: EmedService, private modalService: NgbModal) {
    this.getnNeedles(); 
  }

  //Modals Functions
  openModal(needleG, key, id, description) {    
    this.keyAction = key;
    if(id == undefined){
      $('#nNeedle').modal('show');
    }else{
      this.nNeedle_name = description;
      this.nNeedle_id = id;
      $('#nNeedle').modal('show');
    }
  }

  saveNNeedle(){
    if(this.nNeedle_name == ''){
      alert('Empty field')
    }else{
      if(this.keyAction == 'add'){
          this.apiService._postNumberNeedle(this.fd, this.nNeedle_name)
          .then(response =>{
            if(response.error){
              alert(response.error.message);
              this.nNeedle_name = '';
            }else{
              this.getnNeedles();
              $('#nNeedle').modal('hide');
              this.nNeedle_name = '';
            }
          })
      }else{
        this.apiService._putNumberNeedle(this.fd, this.nNeedle_id, this.nNeedle_name)
        .then(response =>{
          if(response.error){
            alert(response.error.message);
            this.nNeedle_name = '';
          }else{
            this.getnNeedles();
            $('#nNeedle').modal('hide');
            this.nNeedle_name = '';
          }
        })
      }
    }
  }
  
  deleteneedleGs(){
    this.apiService._delNumberNeedle(this.fd, this.nNeedle_id)
    .then(response =>{
      if(response.error){
        alert(response.error.message);
        this.nNeedle_name = '';
      }else{
        this.getnNeedles();
        $('#nNeedle').modal('hide');
        this.nNeedle_name = '';
        this.nNeedle_id = '';
      }
    })
  }



  //Automatic services
  getnNeedles(){ 
    let list = [];
    this.apiService._getNumberNeedle(this.fd)
    .then(response =>{
        response.forEach((e) => {
          /*if(e.active == true){
            list.push(e)
          }*/
          list.push(e)
        });
        this.nNeedles = list;  
    })
  }

}
