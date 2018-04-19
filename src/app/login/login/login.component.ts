import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { QuoteService } from '../../service/quote.service';
import { Quote } from '../../domain/quote.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form: FormGroup;
  quote: Quote = {
      id: "3",
      cn: '每日佳句3',
      en: 'daily quote 3',
      pic: 'assets/img/wordlogo.jpg',
  };
  constructor(private fb: FormBuilder, private quoteService$: QuoteService) {
    this.quoteService$.getQuote().subscribe(q => this.quote = q);
  }

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
