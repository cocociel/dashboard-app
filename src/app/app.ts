import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet
    ,HeaderComponent
    ,FooterComponent
  ],
  template: `
    <app-header></app-header>
    <menu>サイドメニューです2</menu>
    <main class="main">メインです3</main>
    <app-footer></app-footer>
    <router-outlet />
  `
})
export class App {
  protected readonly title = signal('dashboard-app');
}
