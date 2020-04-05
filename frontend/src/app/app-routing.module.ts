import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DeliveryGuard } from './views/delivery/delivery.guard';
import { DeliveryOrderComponent } from './views/delivery/order/delivery-order.component';
import { LoginComponent } from './views/login/login.component';
import { AboutComponent } from './views/about/about.component';
import { StartGuard } from './views/start/start.guard';
import { VendorOrderComponent } from './views/vendor/order/vendor-order.component';
import { VendorGuard } from './views/vendor/vendor.guard';
import { VendorsListComponent } from './views/vendors-list/vendors-list.component';
import { StartComponent } from './views/start/start.component';


const routes: Routes = [
  { path: 'about', component: AboutComponent },
  { path: 'vendors', component: VendorsListComponent },
  { path: 'login', component: LoginComponent },
  { path: 'start', component: StartComponent, canActivate: [StartGuard] },
  { path: 'vendor/order', component: VendorOrderComponent, canActivate: [VendorGuard] },
  { path: 'vendor/order/:id', component: VendorOrderComponent, canActivate: [VendorGuard] },
  { path: 'delivery/:id', component: DeliveryOrderComponent, canActivate: [DeliveryGuard] },
  { path: '**', redirectTo: '/about', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
