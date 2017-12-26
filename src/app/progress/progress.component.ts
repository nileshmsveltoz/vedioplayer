import { Component, OnInit } from '@angular/core';
import {VideoService} from '../video.service';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.css']
})
export class ProgressComponent implements OnInit {

  constructor(public videoService:VideoService) { }

  ngOnInit() {
  }

}
