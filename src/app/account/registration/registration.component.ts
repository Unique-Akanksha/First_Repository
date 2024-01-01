import { Component } from '@angular/core';
import { FormsModule,FormGroup,Validators ,FormBuilder} from '@angular/forms';
import { Accountinfo } from '../accountinfo';
import { AccountserviceService } from '../accountservice.service';
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  signupForm!:FormGroup;
  datasaved="false";
  message!: string;
  // message="";
constructor(private fb:FormBuilder,private accountService:AccountserviceService){
  this.signupForm=this.fb.group({
    name:['',Validators.required],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(3)]]
  })
}
signupSubmit(){
  if(this.signupForm.valid)
  {
    const formData=this.signupForm.value;
    this.datasaved="true";
    this.message="User Registered Successfully";
    console.log(formData);
    alert("User Registred Succesfully...");
    this.signupForm.reset();
  
  }
}
}
