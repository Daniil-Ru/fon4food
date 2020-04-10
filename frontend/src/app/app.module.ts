import { HTTP_INTERCEPTORS, HttpClient, HttpClientModule , HttpClientXsrfModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AboutComponent } from './views/about/about.component';
import { LoginComponent } from './views/login/login.component';
import { VendorsListComponent } from './views/vendors-list/vendors-list.component';
import { VendorComponent } from './views/vendor/vendor.component';
import { DeliveryComponent } from './views/delivery/delivery.component';
import { DeliveryOrderComponent } from './views/delivery/order/delivery-order.component';
import { VendorOrderComponent } from './views/vendor/order/vendor-order.component';
import { StartComponent } from './views/start/start.component';
import { ZipFilterPipe } from './views/vendors-list/zip-filter.pipe';
import { XhrInterceptor } from './services/xhr-interceptor.service';
import { TopBarComponent } from './components/top-bar/top-bar.component';
import { DeliveryBadgeComponent } from './components/delivery-badge/delivery-badge.component';
import { FooterComponent } from './components/footer/footer.component';
import { LegalComponent } from './views/legal/legal.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    LoginComponent,
    VendorsListComponent,
    VendorComponent,
    DeliveryComponent,
    DeliveryOrderComponent,
    VendorOrderComponent,
    StartComponent,
    ZipFilterPipe,
    TopBarComponent,
    DeliveryBadgeComponent,
    FooterComponent,
    LegalComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    HttpClientXsrfModule.withOptions({
      cookieName: 'fon4food-Xsrf-Cookie',
      headerName: 'fon4food-Xsrf-Header',
    }),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
    FormsModule,
    CollapseModule.forRoot(),
    BsDropdownModule.forRoot(),
    FontAwesomeModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: XhrInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}
