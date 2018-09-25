import { Component } from '@angular/core';
import { DataService } from './data.service';

@Component({
    providers: [DataService],
    selector: 'si-service',
    template: `
    <si-cmp-a></si-cmp-a>
    <si-cmp-b></si-cmp-b>
  `
})
export class ServiceComponent {
}
