import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactformsComponent } from './reactforms/reactforms.component';
import { FormarrarynestedComponent } from './formarrarynested/formarrarynested.component';
import { ServiceExampleComponent } from './service-example/service-example.component';
import { ProductService } from '../service/product.service';
import { ValidReactComponent } from './valid-react/valid-react.component';
import { CustValidReactComponent } from './cust-valid-react/cust-valid-react.component';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { HttpExampleComponent } from './http-example/http-example.component';
import { SubEventComponent } from './sub-event/sub-event.component';
import { HttpGetExampleComponent } from './http-get-example/http-get-example.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { NgxSpinnerModule } from 'ngx-spinner';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpPostExampleComponent } from './http-post-example/http-post-example.component';
import { HttpParamsExampleComponent } from './http-params-example/http-params-example.component';
import { AppHttpInterceptorInterceptor } from '../Incterceptor/app-http-interceptor.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    ReactformsComponent,
    FormarrarynestedComponent,
    ServiceExampleComponent,
    ValidReactComponent,
    CustValidReactComponent,
    HttpExampleComponent,
    SubEventComponent,
    HttpGetExampleComponent,
    HttpPostExampleComponent,
    HttpParamsExampleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxPaginationModule,
    NgxSpinnerModule,
    BrowserAnimationsModule
  ],
  providers: [ProductService,
  {
    provide:HTTP_INTERCEPTORS,
    useClass:AppHttpInterceptorInterceptor,
    multi:true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
