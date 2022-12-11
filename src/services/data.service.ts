import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  currentuser=''
  currentacno=''

  constructor() { }

  userDeatiles: any = {
    1000: { acno: 1000, username: "anu", password: 123, balance: 0, transation:[] },
    1001: { acno: 1001, username: "amal", password: 123, balance: 0, transation:[] },
    1002: { acno: 1002, username: "arun", password: 123, balance: 0, transation:[] },
    1003: { acno: 1003, username: "mega", password: 123, balance: 0, transation:[] },
  }

  regester(acno: any, uname: any, psw: any) {
    var userDeatiles = this.userDeatiles
    if (acno in userDeatiles) {
      return false
    }
    else {
      userDeatiles[acno] = { acno, username: uname, password: psw, balance: 0, transation:[]}
      return true
    }

  }


  login(acno: any, psw: any) {


    var userDeatiles = this.userDeatiles

    if (acno in userDeatiles) {
      if (psw == userDeatiles[acno]["password"]) {

        //acnumber
       this.currentacno=acno
        //store user name
        this.currentuser=userDeatiles[acno]["username"]
        return true
      }
      else {
        return false
      }
    }
    else {
      return false
    }
    // alert('login clicked')
  }

  deposit(acno: any, password: any, amount: any) {
    var userDeatiles = this.userDeatiles
    var amnt = parseInt(amount)
    if (acno in userDeatiles) {
      if (password == userDeatiles[acno]['password']) {
        userDeatiles[acno]["balance"] += amnt
        userDeatiles[acno]['transation'].push({type:'CREDIT',amount:amnt})
        return userDeatiles[acno]["balance"]
      }
      else {
        return false
      }
    }
  }

  withdraw(acno:any,password:any,amount:any){
    var userDeatiles=this.userDeatiles
    var amnt=parseInt(amount)
    if (acno in userDeatiles) {
      if (password==userDeatiles[acno]["password"]){
        if (amnt<=userDeatiles[acno]["balance"]) {
          userDeatiles[acno]["balance"]-=amnt
          userDeatiles[acno]['transation'].push({type:'DEPIT',amount:amnt})
          return userDeatiles[acno]["balance"]
        }
        else {
          alert('insufficient balance')
          return false
        }
      }
      else {
        alert('incorrect password')
        return false
      }
    }
    else{
      alert('incorrect ac no')
      return false
    }
  }

  gettransation(acno:any){
    return this.userDeatiles[acno]["transation"]
  }

}
