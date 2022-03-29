import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactformsComponent } from './reactforms/reactforms.component';
import { FormarrarynestedComponent } from './formarrarynested/formarrarynested.component';

@NgModule({
  declarations: [
    AppComponent,
    ReactformsComponent,
    FormarrarynestedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
