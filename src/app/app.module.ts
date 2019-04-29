import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  MatDatepickerModule,
  MatDividerModule,
  MatCardModule,
  MatButtonModule,
  MatListModule,
  MatToolbarModule,
  MatSidenavModule,
  MatIconModule,
  MatGridListModule,
  MatMenuModule,
  MatInputModule,
  MatSelectModule,
  MatRadioModule,
  MatStepperModule,
  MatProgressBarModule,
  MatNativeDateModule,
  MatBottomSheetModule
} from '@angular/material';
import {NavComponent} from './nav/nav.component';
import {LayoutModule} from '@angular/cdk/layout';
import {BrowserComponent} from './browser/browser.component';
import {CooperateFormComponent, BottomSheetOverviewExampleSheet} from './cooperate-form/cooperate-form.component';
import {ReactiveFormsModule} from '@angular/forms';
import {AvailableComponent} from './available/available.component';
import {BookComponent} from './book/book.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { ChartsModule } from 'ng2-charts';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    BrowserComponent,
    CooperateFormComponent,
    BottomSheetOverviewExampleSheet,
    AvailableComponent,
    BookComponent,
    StatisticsComponent,
    HomeComponent
  ],
  entryComponents: [BottomSheetOverviewExampleSheet],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MatListModule,
    MatToolbarModule,
    LayoutModule,
    MatSidenavModule,
    MatIconModule,
    MatGridListModule,
    MatMenuModule,
    MatSelectModule,
    MatRadioModule,
    ReactiveFormsModule,
    MatDividerModule,
    MatStepperModule,
    MatProgressBarModule,
    MatDatepickerModule,
    MatInputModule,
    MatNativeDateModule,
    ChartsModule,
    MatBottomSheetModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
