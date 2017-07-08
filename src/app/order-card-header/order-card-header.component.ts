import { Component, OnInit } from '@angular/core';
import { DataService } from 'app/data.service';

@Component({
  selector: 'app-order-card-header',
  templateUrl: './order-card-header.component.html',
  styleUrls: ['./order-card-header.component.css']
})
export class OrderCardHeaderComponent implements OnInit {

  constructor(
    public dataService: DataService
  ) { }

  ngOnInit() {
  }

}
