import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsWithSignals } from './forms-with-signals/forms-with-signals';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsWithSignals],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('FormSignal');
}
