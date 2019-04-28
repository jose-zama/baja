import {Component} from '@angular/core';
import {map} from 'rxjs/operators';
import {Breakpoints, BreakpointObserver} from '@angular/cdk/layout';
import { equipmentList } from '../mock-equipment';

@Component({
  selector: 'app-browser',
  templateUrl: './browser.component.html',
  styleUrls: ['./browser.component.css']
})
export class BrowserComponent {
  /** Based on the screen size, switch from standard to one column per row */

  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({matches}) => {
      return equipmentList;
    })
  );

  constructor(private breakpointObserver: BreakpointObserver) {
  }
}
