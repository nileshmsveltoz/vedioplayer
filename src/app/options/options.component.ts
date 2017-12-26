import { Component, OnInit } from '@angular/core';
import {VideoService} from '../video.service';

@Component({
  selector: 'app-options',
  templateUrl: './options.component.html',
  styleUrls: ['./options.component.css']
})
export class OptionsComponent implements OnInit {

  constructor(public videoService:VideoService) { }

  ngOnInit() {
  }

}
