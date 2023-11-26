import { Component } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-manga-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './manga-list.component.html',
  styleUrl: './manga-list.component.scss',
})
export class MangaListComponent {
  mangaList: Array<any> = [];

  constructor(private http: HttpClient) {
    this.getData();
  }

  getData() {
    this.http
      .get<any>('https://service-collection-production.up.railway.app/manga')
      .subscribe({
        next: (data) => {
          console.log('data', data[0]);

          this.mangaList = data;
        },
        error: (error) => {
          console.error(error);
        },
      });
  }
}
