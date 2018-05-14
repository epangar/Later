import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule} from '@angular/router';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { EntryComponent } from './entry/entry.component';
import { EntryService } from './services/entry.service';
import { ListService } from './services/list.service';
import { routes } from './routes'
import { LoginFormComponent } from './login-form/login-form.component';
import { SessionService } from './services/session.service';
import { HttpModule } from '@angular/http';



@NgModule({
  declarations: [
    AppComponent,
    EntryComponent,
    ListComponent,
    LoginFormComponent
],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(routes),
    FormsModule
  ],
  providers: [SessionService, ListService, EntryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
