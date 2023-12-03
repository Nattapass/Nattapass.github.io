import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { NgbDropdownModule, NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-manga-list',
  standalone: true,
  imports: [CommonModule, NgbPaginationModule, NgbDropdownModule],
  templateUrl: './manga-list.component.html',
  styleUrl: './manga-list.component.scss',
})
export class MangaListComponent {
  mangaList: Array<any> = [];
  page = 1;
  

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

  sortBy(sortType:string){
    switch (sortType) {
      case 'New':
        this.mangaList = this.mangaList.sort((a, b) => new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime());
        break;
      case 'Old':
        this.mangaList = this.mangaList.sort((a, b) => new Date(a.updatedAt).getTime() - new Date(b.updatedAt).getTime());
        break;
      default:
        this.mangaList = this.mangaList.sort((a, b) => +a.no - +b.no);
        break;
    }
  }
}
