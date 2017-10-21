import { Component, OnInit } from '@angular/core';
import { DataService } from 'app/data.service';

@Component({
  selector: 'app-send-repair-request',
  templateUrl: './send-repair-request.component.html',
  styleUrls: ['./send-repair-request.component.css']
})
export class SendRepairRequestComponent implements OnInit {

  constructor(public dataService: DataService) { }

  ngOnInit() {
  }

}
