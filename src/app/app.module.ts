import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TodocardComponent } from './shared/component/todocard/todocard.component';
import { ScrollDirective } from './shared/directive/scroll.directive';

@NgModule({
  declarations: [
    AppComponent,
    TodocardComponent,
    ScrollDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
