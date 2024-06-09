import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IModelKit } from '../interface/manga.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ModelKitService {

  constructor(private http: HttpClient) { }

  getModelKitList(): Observable<IModelKit[]> {
    return this.http
      .get<IModelKit[]>('https://service-collection.vercel.app/model-kit')
  }
}
