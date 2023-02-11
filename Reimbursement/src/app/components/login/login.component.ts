import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Employee } from 'src/app/models/employee';
import { AuthService } from 'src/app/services/authService/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @Input() currentUser?: Employee;
  loginForm = new FormGroup({
    username: new FormControl(),
    password: new FormControl()
  });
  submitted = false;

  constructor(private fb:FormBuilder, private authService: AuthService) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(5)]],
      password: ['', [Validators.required, 
        Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,12}$')]]
    });
  }

  get loginData(){
    return this.loginForm.controls;
  }

  onSubmit(){
    this.submitted = true;
    if (this.loginForm.valid){
      
    
    }
  }

  register(){

  }

}
