import { Component, OnInit } from '@angular/core';

import { updates } from '../updates';

@Component({
  selector: 'app-update-list',
  templateUrl: './update-list.component.html',
  styleUrls: ['./update-list.component.css']
})
export class UpdateListComponent implements OnInit {
  updates = updates;
  constructor() { }

  ngOnInit() {
  }

}
