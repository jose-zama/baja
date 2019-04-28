import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {BrowserComponent}      from './browser/browser.component';
import {CooperateFormComponent}      from './cooperate-form/cooperate-form.component';
import {AvailableComponent}      from './available/available.component';

const routes: Routes = [
  {path: 'investment', component: BrowserComponent},
  {path: 'invest/detail/:id', component: CooperateFormComponent},
  {path: 'available', component: AvailableComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
