import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/services/data.service';

@Component({
  selector: 'app-regester',
  templateUrl: './regester.component.html',
  styleUrls: ['./regester.component.css']
})
export class RegesterComponent {

  uname=''
  acno=''
  psw=''

  constructor(private ds:DataService,private router:Router) { }

  ngOnInit():void{
  }

  regester(){

    var uname=this.uname
    var acno=this.acno
    var psw=this.psw
    

    const result=this.ds.regester(acno,uname,psw)

    if(result){
      alert('registraction sucess')
      this.router.navigateByUrl('')
    }
    else{
      alert('user already exist')
      this.router.navigateByUrl('')
    }

  }
}

