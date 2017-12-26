import { Component, OnInit } from '@angular/core';
import {VideoService} from '../video.service';
import {TimedisplayPipe} from "../timedisplay.pipe";

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css'],
  providers: [ TimedisplayPipe ]
})
export class ToolbarComponent implements OnInit {

  constructor(public videoService:VideoService) { }

  ngOnInit() {
  }

}
