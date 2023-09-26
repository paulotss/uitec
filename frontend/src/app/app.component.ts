import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <main>
      <header class="p-2 bg-blue-600 text-center text-white font-bold mb-3">
        UITEC - Desafio
      </header>
      <section class="p-3">
        <router-outlet></router-outlet>
      </section>
    </main>
  `
})
export class AppComponent {
  title = 'uitec_front';
}
