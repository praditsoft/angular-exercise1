import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NarongchaiComponent } from './components/narongchai/narongchai.component';
import { ArnonComponent } from './components/arnon/arnon.component';
import { SongchaiComponent } from './components/songchai/songchai.component';
import { ThanadeComponent } from './components/thanade/thanade.component';
import { NuttawatComponent } from './components/nuttawat/nuttawat.component';
import { SanonComponent } from './components/sanon/sanon.component';

@NgModule({
  declarations: [
    AppComponent,
    NarongchaiComponent,
    ArnonComponent,
    SongchaiComponent,
    ThanadeComponent,
    NuttawatComponent,
    SanonComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
