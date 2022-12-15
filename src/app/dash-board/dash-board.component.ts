import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from 'src/services/data.service';

@Component({
  selector: 'app-dash-board',
  templateUrl: './dash-board.component.html',
  styleUrls: ['./dash-board.component.css']
})
export class DashBoardComponent {

  dateandtime:any

  acno:any

  user=''

  constructor(private ds:DataService,private fb:FormBuilder,private router:Router) { 

    this.dateandtime=new Date()

    //acess user name
    this.user=this.ds.currentuser

  }

  depositeForm=this.fb.group({acno:[''],psw:[''],amnt:['']})

  withdrawForm=this.fb.group({acno1:[''],psw1:[''],amnt1:['']})

  ngOnInit():void {
    if(!localStorage.getItem('currentacno')){
      alert('please login first')
      this.router.navigateByUrl('')
    }
  }

  deposite(){

    var acno=this.depositeForm.value.acno
    var psw=this.depositeForm.value.psw
    var amnt=this.depositeForm.value.amnt

    const result=this.ds.deposit(acno,psw,amnt)

    if(result){
      alert(`${amnt} credited to your ac and the balance is ${result}`)
    }
    else{
      alert(`incorrect password acno or password`)
    }

  }
  
  withdraw(){

    var acno1=this.depositeForm.value
    var psw1=this.depositeForm.value
    var amnt1=this.depositeForm.value

    const result=this.ds.withdraw(acno1,psw1,amnt1)
    if(result){
      alert(`${amnt1}is depeted and the balance is ${result}`)
    }

  }

  logout(){
    localStorage.removeItem('currentuser')
    localStorage.removeItem('currentacno')
    this.router.navigateByUrl('')
  }

  deleteconfim(){
    this.acno=JSON.parse(localStorage.getItem('currentacno')|| "")
  }

}
