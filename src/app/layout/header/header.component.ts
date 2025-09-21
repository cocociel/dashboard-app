import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  selector: 'app-header',
  imports: [MatToolbarModule],
  template: `
    <mat-toolbar>
      <span>ai___'s Dashboard</span>
    </mat-toolbar>
  `,
  styles: [
    `
      :host {
        display: block;
      }
      
      mat-toolbar {
        color: var(--red-txt);
        background-color: var(--red-bg-toolbar);
        border-bottom: 1px solid var(--red-hr);
      }

      span {
        font-family: "WDXL Lubrifont JP N";
      }
    `
  ] 

})
export class HeaderComponent {

}
