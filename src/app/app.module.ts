import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { OptionsComponent } from './options/options.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { ProgressComponent } from './progress/progress.component';
import { TimedisplayPipe } from './timedisplay.pipe';
import {VideoService} from './video.service';
import {HttpClientModule} from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    OptionsComponent,
    ToolbarComponent,
    ProgressComponent,
    TimedisplayPipe
  ],
  imports: [
    BrowserModule,HttpClientModule
  ],
  providers: [VideoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
