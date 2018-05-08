import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule} from '@angular/router';


import { AppComponent } from './app.component';
import { EntryComponent } from './entry/entry.component';
import { ListComponent } from './list/list.component';
import { routes } from './routes'


@NgModule({
  declarations: [
    AppComponent,
    EntryComponent,
    ListComponent
],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
