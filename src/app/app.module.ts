import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppointmentComponent } from './component/appointment/appointment.component';
import { HomeComponent } from './component/home/home.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCardModule, MatDividerModule, MatIconModule, MatInputModule, MatOptionModule, MatProgressBarModule, MatRadioModule, MatSelectModule, MatSliderModule } from '@angular/material';
import {MatBadgeModule} from '@angular/material/badge';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    AppointmentComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,MatToolbarModule,MatBadgeModule, BrowserAnimationsModule,MatIconModule,
    MatCardModule,FlexLayoutModule, MatInputModule,FormsModule,MatDividerModule,MatProgressBarModule,
    MatSliderModule,MatOptionModule,MatSelectModule,MatRadioModule,MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
