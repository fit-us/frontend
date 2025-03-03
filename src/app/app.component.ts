import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HlmButtonDirective } from '@spartan-ng/ui-button-helm';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  template: ` <main class="w-full max-w-[500px] mx-auto border-1 min-h-[100vh]">
    <router-outlet />
  </main>`,
})
export class AppComponent {
  title = 'fitus-frontend';
}
