import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {BrowserComponent}      from './browser/browser.component';
import {CooperateFormComponent}      from './cooperate-form/cooperate-form.component';
import {AvailableComponent}      from './available/available.component';
import {BookComponent}      from './book/book.component';
import {StatisticsComponent} from './statistics/statistics.component';

const routes: Routes = [
  {path: 'investment', component: BrowserComponent},
  {path: 'invest/detail/:id', component: CooperateFormComponent},
  {path: 'available', component: AvailableComponent},
  {path: 'book/:id', component: BookComponent},
  {path: 'statistics', component: StatisticsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
