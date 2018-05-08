import { EntryComponent } from "./entry/entry.component";
import { ListComponent } from "./list/list.component";
import { Routes, RouterModule } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home',  component: ListComponent },
  { path: 'entry/:id', component: EntryComponent }

];

 
