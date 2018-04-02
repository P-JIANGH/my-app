import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  items: string[] = [];
  constructor() { }

  ngOnInit() {
    for (let i = 1; i <= 20; i++) {
      this.items.push(`avatars:svg-${i}`);
    }
  }

}
