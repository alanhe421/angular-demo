import {Component, OnInit} from "@angular/core";

@Component({
  selector: 'app-nodata',
  templateUrl: './nodata.component.html',
  styleUrls: ['./nodata.component.css']
})
export class NodataComponent implements OnInit {
  count: number = 1;

  constructor() {
  }

  ngOnInit() {
  }

}
