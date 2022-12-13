import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { DataService } from 'src/services/data.service';

@Component({
  selector: 'app-dash-board',
  templateUrl: './dash-board.component.html',
  styleUrls: ['./dash-board.component.css']
})
export class DashBoardComponent {

  user=''

  constructor(private ds:DataService,private fb:FormBuilder) { 
    //acess user name
    this.user=this.ds.currentuser

  }

  depositeForm=this.fb.group({acno:[''],psw:[''],amnt:['']})

  withdrawForm=this.fb.group({acno1:[''],psw1:[''],amnt1:['']})

  ngOnInit():void {

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

}
