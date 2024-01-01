import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular';
  name="Om";
  items=["Akanksha","Bhawana","Anu","Vandana"];
  constructor(public router:Router){}
  getdata(){
    alert("THIS IS EVENT");
  }
  add(data:string){
    alert(data);
  }
  routeNavigate(){
    this.router.navigate(['/signup']);
  }
  formSubmit(val:any){
    console.log(val);
    console.log(val.name);
    console.log(val.email);
    console.log(val.password);
  }
}
