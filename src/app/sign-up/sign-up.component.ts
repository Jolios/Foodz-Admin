import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { FirebaseService } from '@app/_services/firebase.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  signupForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;
  error = '';

  
  constructor(private formBuilder: FormBuilder,private firebaseService: FirebaseService,private route: ActivatedRoute,) { }

  ngOnInit(): void {
    this.signupForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
  });
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  get f() { return this.signupForm.controls; }

  async onSignUp(){

    if (this.signupForm.invalid) {
      return;
  }

  this.loading = true;

  //console.log(this.f.email.value + " "+ this.f.password.value);
  await this.firebaseService.signup(this.f.email.value,this.f.password.value,this.returnUrl)
    .catch((e)=>{
      this.error = e;
      this.loading = false;
    });
  }
}
