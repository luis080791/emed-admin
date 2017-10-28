import {Component} from '@angular/core';

import { EmedService } from '../.././api/api';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';



@Component({
  //selector: 'countries',
  styleUrls: ['./countries.scss'],
  templateUrl: './countries.html'
})
export class Countries {

  fd: string = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJkYXRhIjp7InVzZXJJZCI6NH19.X4CIOj2KBb_QkdtvLmByTAgSAsyM0pxIj80dxXN6TOk';
  countries: object = [];
  country_name: string = '';
  country_id: string = '';
  keyAction: string;

  constructor(private apiService: EmedService, private modalService: NgbModal) {
    this.getCountries();  
  }

//Modals Functions
  openModal(country, key, id, description) {   
    this.keyAction = key;
    if(id == undefined){
      $('#country').modal('show');
    }else{
      this.country_name = description;
      this.country_id = id;
      $('#country').modal('show');
    }
  }

  saveCountry(){
    if(this.country_name == ''){
      alert('Empty field')
    }else{
      if(this.keyAction == 'add'){
          this.apiService._postCountry(this.fd, this.country_name)
          .then(response =>{
            if(response.error){
              alert(response.error.message);
              this.country_name = '';
            }else{
              this.getCountries();
              $('#country').modal('hide');
              this.country_name = '';
            }
          })
      }else{
        this.apiService._putCountry(this.fd, this.country_id, this.country_name)
        .then(response =>{
          if(response.error){
            alert(response.error.message);
            this.country_name = '';
          }else{
            this.getCountries();
            $('#country').modal('hide');
            this.country_name = '';
          }
        })
      }
    }
  }
  
  deleteCountry(){
    this.apiService._delCountry(this.fd, this.country_id)
    .then(response =>{
      if(response.error){
        alert(response.error.message);
        this.country_name = '';
      }else{
        this.getCountries();
        $('#country').modal('hide');
        this.country_name = '';
      }
    })
  }







//Automatic services
  getCountries(){
    let list = [];
    this.apiService._getCountries(this.fd)
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