import { HttpClient, HttpClientModule } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { StartComponent } from './views/start/start.component';
import { LoginComponent } from './views/login/login.component';
import { VendorsListComponent } from './views/vendors-list/vendors-list.component';
import { VendorComponent } from './views/vendor/vendor.component';
import { DeliveryComponent } from './views/delivery/delivery.component';
import { DeliveryOrderComponent } from './views/delivery/order/delivery-order.component';
import { VendorOrderComponent } from './views/vendor/order/vendor-order.component';

@NgModule({
  declarations: [
    AppComponent,
    StartComponent,
    LoginComponent,
    VendorsListComponent,
    VendorComponent,
    DeliveryComponent,
    DeliveryOrderComponent,
    VendorOrderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
