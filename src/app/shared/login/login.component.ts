import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userForm!: FormGroup
  hide = true;
  constructor(
    public dialogRef: MatDialogRef<LoginComponent>
  ) {
   }

  ngOnInit(): void {
    this.userForm = new FormGroup({
      username: new FormControl(''),
      password: new FormControl('')
    })
  }

  login(){
    console.log(this.userForm);
  }

}
