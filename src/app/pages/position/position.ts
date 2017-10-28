import {Component} from '@angular/core';

import { EmedService } from '../.././api/api';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'position',
  styleUrls: ['./position.scss'],
  templateUrl: './position.html'
})
export class Position {

  fd: string = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJkYXRhIjp7InVzZXJJZCI6NH19.X4CIOj2KBb_QkdtvLmByTAgSAsyM0pxIj80dxXN6TOk';
  positions: object = [];
  position_name: string = '';
  position_id: string = '';
  keyAction: string;

  constructor(private apiService: EmedService, private modalService: NgbModal) {
    this.getPositions(); 
  }

  //Modals Functions
  openModal(needleG, key, id, description) {    
    this.keyAction = key;
    if(id == undefined){
      $('#position').modal('show');
    }else{
      this.position_name = description;
      this.position_id = id;
      $('#position').modal('show');
    }
  }

  savePosition(){
    if(this.position_name == ''){
      alert('Empty field')
    }else{
      if(this.keyAction == 'add'){
          this.apiService._postPosition(this.fd, this.position_name)
          .then(response =>{
            if(response.error){
              alert(response.error.message);
              this.position_name = '';
            }else{
              this.getPositions();
              $('#position').modal('hide');
              this.position_name = '';
            }
          })
      }else{
        this.apiService._putPosition(this.fd, this.position_id, this.position_name)
        .then(response =>{
          if(response.error){
            alert(response.error.message);
            this.position_name = '';
          }else{
            this.getPositions();
            $('#position').modal('hide');
            this.position_name = '';
          }
        })
      }
    }
  }
  
  deletePosition(){
    this.apiService._delPosition(this.fd, this.position_id)
    .then(response =>{
      if(response.error){
        alert(response.error.message);
        this.position_name = '';
      }else{
        this.getPositions();
        $('#position').modal('hide');
        this.position_name = '';
        this.position_id = '';
      }
    })
  }



  //Automatic services
  getPositions(){ 
    let list = [];
    this.apiService._getPosition(this.fd)
    .then(response =>{
        response.forEach((e) => {
          /*if(e.active == true){
            list.push(e)
          }*/
          list.push(e)
        });
        this.positions = list;  
    })
  }

}
