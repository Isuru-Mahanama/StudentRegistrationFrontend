import { Component } from '@angular/core';
import { schedulingRequest } from '../../Category/models/scheduling';

@Component({
  selector: 'app-sceduling',
  templateUrl: './sceduling.component.html',
  styleUrl: './sceduling.component.css'
})
export class ScedulingComponent {
  model:schedulingRequest;
  constructor(){
    this.model = {
      courseCode:'',
      startTime:'',
      endTime:''
    }
  }

  inputFields: any[] = [{}];

  AddNewSet(){
    this.inputFields.push({ value: '' });
  }

  onFormSubmit(){

  }
}
