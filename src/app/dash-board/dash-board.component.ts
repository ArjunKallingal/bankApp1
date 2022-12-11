import { Component } from '@angular/core';
import { DataService } from 'src/services/data.service';

@Component({
  selector: 'app-dash-board',
  templateUrl: './dash-board.component.html',
  styleUrls: ['./dash-board.component.css']
})
export class DashBoardComponent {

  acno=''
  psw=''
  amnt=''

  acno1=''
  psw1=''
  amnt1=''

  user=''

  constructor(private ds:DataService) { 
    //acess user name
    this.user=this.ds.currentuser

  }

  ngOnInit():void {

  }

  deposite(){

    var acno=this.acno
    var psw=this.psw
    var amnt=this.amnt

    const result=this.ds.deposit(acno,psw,amnt)

    if(result){
      alert(`${amnt} credited to your ac and the balance is ${result}`)
    }
    else{
      alert(`incorrect password acno or password`)
    }

  }
  
  withdraw(){

    var acno1=this.acno1
    var psw1=this.psw1
    var amnt1=this.amnt1

    const result=this.ds.withdraw(acno1,psw1,amnt1)
    if(result){
      alert(`${amnt1}is depeted and the balance is ${result}`)
    }

  }

}
