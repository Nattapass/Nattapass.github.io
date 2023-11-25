import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'my-collection';

  constructor(private http: HttpClient) {
    this.http.get('https://service-collection-production.up.railway.app/manga').subscribe((data) =>
      console.log('data ==>', data)
    )
  }
}
