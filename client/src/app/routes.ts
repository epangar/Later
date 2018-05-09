import { EntryComponent } from "./entry/entry.component";
import { ListComponent } from "./list/list.component";
import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: ListComponent},
  { path: 'signin', component: EntryComponent },
  { path: 'signup', component: EntryComponent },
  { path: 'login', component: EntryComponent },
  { path: 'logout', component: EntryComponent },
  

];

 
