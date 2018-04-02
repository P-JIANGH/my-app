import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-invite',
  templateUrl: './invite.component.html',
  styleUrls: ['./invite.component.scss']
})
export class InviteComponent implements OnInit {

  items = [{
    id: 1,
    name: 'hjiang',
  }, {
    id: 2,
    name: 'zmc',
  }, {
    id: 3,
    name: 'randomA',
  }];
  constructor() { }

  ngOnInit() {
  }

  displayUser = user => (user.name);

}
