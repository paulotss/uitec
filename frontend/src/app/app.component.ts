import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <main>
      <a [routerLink]="['/']">
        <header class="brand-name">
          <img class="brand-logo" src="/assets/logo.svg" alt="logo" aria-hidden="true">
        </header>
      </a>
      <section class="content">
        <router-outlet></router-outlet>
      </section>
    </main>
    <router-outlet></router-outlet>
  `
})
export class AppComponent {
  title = 'uitec_front';
}
