import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  template: `
    <header>ヘッダーです1</header>
    <menu>サイドメニューです2</menu>
    <main class="main">メインです3</main>
    <footer>フッターです4</footer>
    <router-outlet />
  `
})
export class App {
  protected readonly title = signal('dashboard-app');
}
