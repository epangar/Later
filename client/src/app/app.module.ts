import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ApplicationRef } from '@angular/core';
import { RouterModule} from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AgmCoreModule } from '@agm/core';
import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { EntryComponent } from './entry/entry.component';
import { EntryService } from './services/entry.service';
import { ListService } from './services/list.service';
import { routes } from './routes'
import { LoginFormComponent } from './login-form/login-form.component';
import { SessionService } from './services/session.service';
import { HttpModule } from '@angular/http';
import { AddEntryComponent } from './add-entry/add-entry.component';
import { AddListComponent } from './add-list/add-list.component';
import { ScreenComponent } from './screen/screen.component';
import { MapComponent } from './map/map.component';
import { AngularGooglePlaceModule } from 'angular-google-place';



@NgModule({
  declarations: [
    AppComponent,
    EntryComponent,
    ListComponent,
    LoginFormComponent,
    AddEntryComponent,
    AddListComponent,
    ScreenComponent,
    MapComponent
],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(routes),
    CommonModule,
    FormsModule,
    AngularGooglePlaceModule
    /* AgmCoreModule.forRoot({
      apiKey: ---
      
    }) */
  ],
  providers: [SessionService, ListService, EntryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
