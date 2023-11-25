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
  data: any

  constructor(private http: HttpClient) {
    this.http.get('https://service-collection-production.up.railway.app/manga').subscribe((data :any) => {
      this.data = data[0];
      console.log('data ==>', this.data.name);
    }
    )
  }
}
