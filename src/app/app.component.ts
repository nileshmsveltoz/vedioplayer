import { Component, OnInit } from '@angular/core';
import { ProgressComponent } from './progress/progress.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { OptionsComponent } from './options/options.component';
import {VideoService} from './video.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(public videoService:VideoService) {}
  ngOnInit() {
    console.log("Show started");
      this.videoService.appSetup("videoDisplay");
      this.videoService.gatherJSON();
  }
}
