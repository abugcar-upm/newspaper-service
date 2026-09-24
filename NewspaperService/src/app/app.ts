import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {NewspaperWithService} from './newspaper-with-service/newspaper-with-service';

@Component({
  imports: [RouterOutlet, NewspaperWithService],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('Newspaper');
}
