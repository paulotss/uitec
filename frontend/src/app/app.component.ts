import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <main>
      <a [routerLink]="['/']">
        <header class="brand-name">
          Logo
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
