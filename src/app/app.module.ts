import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactformsComponent } from './reactforms/reactforms.component';
import { FormarrarynestedComponent } from './formarrarynested/formarrarynested.component';
import { ServiceExampleComponent } from './service-example/service-example.component';
import { ProductService } from './product.service';
import { ValidReactComponent } from './valid-react/valid-react.component';
import { CustValidReactComponent } from './cust-valid-react/cust-valid-react.component';

@NgModule({
  declarations: [
    AppComponent,
    ReactformsComponent,
    FormarrarynestedComponent,
    ServiceExampleComponent,
    ValidReactComponent,
    CustValidReactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
