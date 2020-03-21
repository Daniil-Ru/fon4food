import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DeliveryComponent } from './views/delivery/delivery.component';
import { DeliveryOrderComponent } from './views/delivery/order/delivery-order.component';
import { LoginComponent } from './views/login/login.component';
import { StartComponent } from './views/start/start.component';
import { VendorOrderComponent } from './views/vendor/order/vendor-order.component';
import { VendorComponent } from './views/vendor/vendor.component';
import { VendorsListComponent } from './views/vendors-list/vendors-list.component';


const routes: Routes = [
  { path: 'start', component: StartComponent },
  { path: 'login', component: LoginComponent },
  { path: 'vendors-list', component: VendorsListComponent },
  {
    path: 'vendor', component: VendorComponent, children: [
      { path: 'order', component: VendorOrderComponent },
    ],
  },
  {
    path: 'delivery', component: DeliveryComponent, children: [
      { path: 'order', component: DeliveryOrderComponent },
    ],
  },
  { path: '**', redirectTo: '/start', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
