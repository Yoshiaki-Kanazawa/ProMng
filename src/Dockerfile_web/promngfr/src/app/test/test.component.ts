import { Component, OnInit } from '@angular/core';

import { TestService } from '../test.service';
import { Product } from '../product';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  producttests: Product[] = [];


  constructor(private testService: TestService) { }

  ngOnInit(): void {
    this.testService.getTest()
      .then(producttests => this.producttests = producttests);
  }

}
