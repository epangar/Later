import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule} from '@angular/router';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { EntryComponent } from './entry/entry.component';
import { ListComponent } from './list/list.component';
import { routes } from './routes'
import { LoginFormComponent } from './login-form/login-form.component';
import { SessionService } from './services/session.service';


@NgModule({
  declarations: [
    AppComponent,
    EntryComponent,
    ListComponent,
    LoginFormComponent
],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
  ],
  providers: [SessionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
