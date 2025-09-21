import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  imports: [],
  template: `
    <footer>
      <span>© 2025 ai___'s Dashboard</span>
    </footer>
  `,
  styles: [
    `
      footer {
        display: flex;
        justify-content: center;
        align-items: center;
        position: fixed;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 42px;
        background-color: var(--red-bg-toolbar);
        color: var(--red-txt);
        font-size: 14px;
        border-top: 1px solid var(--red-hr);
      }
    `
  ]
})
export class FooterComponent {

}
