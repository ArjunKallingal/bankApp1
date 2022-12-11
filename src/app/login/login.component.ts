import { Component } from '@angular/core';
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
  acno=''
  psw=''

  userDeatiles:any={
    1000:{acno:1000,username:"anu",password:123,balance:0},
    1001:{acno:1001,username:"amal",password:123,balance:0},
    1002:{acno:1002,username:"arun",password:123,balance:0},
    1003:{acno:1003,username:"mega",password:123,balance:0},
  }

  constructor(private router:Router,private ds:DataService){}

  ngOnInit():void{
    
  }
  login(){

    var acno=this.acno
    var psw=this.psw

    const result=this.ds.login(acno,psw)
    if(result){
      alert('login success')
      this.router.navigateByUrl('dashboard')
    }
    else{
      alert('incurrect username or password')
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
