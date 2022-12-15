import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from 'src/services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  aim="your perfect banking partner"
  data="enter your account number"

  userDeatiles:any={
    1000:{acno:1000,username:"anu",password:123,balance:0},
    1001:{acno:1001,username:"amal",password:123,balance:0},
    1002:{acno:1002,username:"arun",password:123,balance:0},
    1003:{acno:1003,username:"mega",password:123,balance:0},
  }

  constructor(private router:Router,private ds:DataService,private fb:FormBuilder){}

  loginForm=this.fb.group({acno:['',[Validators.required,Validators.pattern('[0-9]+')]],psw:['',[Validators.required,Validators.pattern('[0-9]+')]]})

  ngOnInit():void{
    
  }
  login(){

    var acno=this.loginForm.value.acno
    var psw=this.loginForm.value.psw

    if(this.loginForm.valid){
      
    const result=this.ds.login(acno,psw)
    if(result){
      alert('login success')
      this.router.navigateByUrl('dashboard')
    }
    else{
      alert('incurrect username or password')
    }

    }
    else{
      alert('invalid form')
    }


  }

  // login(a:any,b:any){

  //   this.acno=a.value
  //   this.psw=b.value

  //   var acno=this.acno
  //   var psw=this.psw
  //   var userDeatiles=this.userDeatiles

  //   if(acno in userDeatiles){
  //     if(psw==userDeatiles[acno]["password"]){
  //       alert('log in success')
  //     }
  //     else{
  //       alert('incorrect password')
  //     }
  //   }
  //   else{
  //     alert('incorrect username')
  //   }
  //   // alert('login clicked')
  // }
  // accnoChange(event:any){
  //   this.acno=event.target.value
  //   console.log(this.acno);
    
  // }
  // pswChange(event:any){
  //   this.psw=event.target.value
  //   console.log(this.psw);
    
  // }
}
function acno(acno: any, arg1: string[], psw: any, arg3: string[]) {
  throw new Error('Function not implemented.');
}

function psw(acno: (acno: any, arg1: string[], psw: any, arg3: string[]) => void, arg1: string[], psw: any, arg3: string[]) {
  throw new Error('Function not implemented.');
}

