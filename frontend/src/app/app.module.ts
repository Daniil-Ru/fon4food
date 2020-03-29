import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
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
    MatCardModule,
    MatInputModule,
    FormsModule,
    MatIconModule,
    MatTableModule,
    MatSortModule,
    MatCheckboxModule,
    CollapseModule.forRoot(),
    BsDropdownModule.forRoot(),
    FontAwesomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}
