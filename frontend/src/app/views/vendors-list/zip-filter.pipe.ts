import {Pipe, PipeTransform} from '@angular/core';
import {Vendor} from './vendors-list.component';

@Pipe({
  name: 'zipFilter'
})
export class ZipFilterPipe implements PipeTransform {
  transform(vendors: Vendor[], zip: string): Vendor[] {
    return vendors.filter(vendor => vendor.zipCode.startsWith(zip));
  }
}
