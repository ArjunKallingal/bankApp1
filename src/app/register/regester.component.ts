import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from 'src/services/data.service';

@Component({
  selector: 'app-regester',
  templateUrl: './regester.component.html',
  styleUrls: ['./regester.component.css']
})
export class RegesterComponent {

  // uname=''
  // acno=''
  // psw=''

  constructor(private ds: DataService, private router: Router, private fb: FormBuilder) { }

  registerForm=this.fb.group({uname:['',[Validators.required,Validators.pattern('[a-zA-Z]+')]],acno:['',[Validators.required,Validators.pattern('[0-9]+')]],psw:['',[Validators.required,Validators.pattern('[0-9]+')]]})

  ngOnInit(): void {
  }

  register() {

    var uname = this.registerForm.value.uname
    var acno = this.registerForm.value.acno
    var psw = this.registerForm.value.psw

    if (this.registerForm.valid) {

      const result = this.ds.register(acno, uname, psw)

      if (result) {
        alert('registraction sucess')
        this.router.navigateByUrl('')
      }
      else {
        alert('user already exist')
        this.router.navigateByUrl('')
      }

    }
    else {
      alert("invalid form")
    }
  }

}

