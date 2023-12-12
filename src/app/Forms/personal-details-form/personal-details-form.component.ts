import { Component } from '@angular/core';
import { AddPersonalDetailsRequest } from '../../Category/models/add-personaldetails';
import { PersaonalDetailsService } from '../../Category/Services/persaonal-details.service';

@Component({
  selector: 'app-personal-details-form',
  templateUrl: './personal-details-form.component.html',
  styleUrl: './personal-details-form.component.css'
})
export class PersonalDetailsFormComponent {

  model : AddPersonalDetailsRequest;
  constructor( private personalDetailsService : PersaonalDetailsService ){
    this.model = {
   
    firstName: '',
    lastName: '',
    phoneNumber: 0,
    gender: '',
    academicProgramme: '',
    birthday: new Date(),
    enrolledDate: new Date(),
    no: '',
    street :'', 
    district:'' 
      
    };
  }
  onFormSubmit(){
    console.log(this.model)
    this.personalDetailsService.addPersonalDetails(this.model)
    .subscribe({
      next : (response) =>{
        console.log("This was successfull");
      },
      error: (error) =>{
        console.log(error);
      }
    })
  }
}
