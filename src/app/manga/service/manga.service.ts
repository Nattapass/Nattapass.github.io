import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IManga } from '../interface/manga.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MangaService {

  constructor(private http: HttpClient) { }

  getMangaList(): Observable<IManga[]> {
    return this.http
      .get<IManga[]>('https://service-collection.vercel.app/manga')
  }
}
