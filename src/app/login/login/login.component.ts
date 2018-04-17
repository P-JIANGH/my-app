import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.form = this.fb.group({
      email: ['hjiang@163.com', Validators.compose([Validators.required, Validators.email])],
      password: ['', Validators.required],
    });
  }

  onSubmit({ value, valid }, ev: Event) {
    ev.preventDefault();
    console.log(value);
    console.log(valid);
  }

  validate(fc: FormControl): {[key: string]: any} {
    if (!fc.value) { return null; }
    const pattern = /^wang+/;
    if (pattern.test(fc.value)) { return null; }
    return {
      emailNotVaild: 'The Email must start with wang!',
    };
  }
}
