import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-formcomponent',
  templateUrl: './formcomponent.component.html',
  styleUrls: ['./formcomponent.component.css']
})
export class FormcomponentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }


  user={
   username:"devindi",
    email:"devindianushika@gmail.com",
    password:""

  }
  onSubmit(formdata:NgForm){
    console.log(this.user)
  }

logChange(data){
  console.log(data)
}




}
