import { CommonModule, JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  NgbDropdownModule,
  NgbPaginationModule,
  NgbTypeahead,
  NgbTypeaheadModule,
} from '@ng-bootstrap/ng-bootstrap';
import {
  OperatorFunction,
  Observable,
  debounceTime,
  map,
  takeUntil,
  Subject,
} from 'rxjs';
import { MangaService } from '../service/manga.service';
import { IManga } from '../interface/manga.interface';
import { Store } from '@ngrx/store';
import { loadManga } from '../ngrx/action/manga.action';
@Component({
    selector: 'app-manga-list',
    imports: [
        CommonModule,
        NgbPaginationModule,
        NgbDropdownModule,
        NgbTypeaheadModule,
        FormsModule
    ],
    templateUrl: './manga-list.component.html',
    styleUrl: './manga-list.component.scss'
})
export class MangaListComponent {
  mangaList$ = this.store.select(state => state.manga);
  mangaList: Array<IManga> = [];
  page = 1;
  private ngUnsubscribe = new Subject();


  constructor(private mangaService: MangaService, private store: Store<{ manga: IManga[] }>) {
    // this.getData();
    this.store.dispatch(loadManga());
    this.mangaList$.pipe(takeUntil(this.ngUnsubscribe)).subscribe((data) => {
      this.mangaList = data
      console.log('in mangalist');
      
    })
  }

  model!: IManga;

  search: OperatorFunction<string, readonly any[]> = (
    text$: Observable<string>
  ) =>
    text$.pipe(
      debounceTime(200),
      map((term) =>
        term === ''
          ? []
          : this.mangaList
            .filter(
              (v) => v.name.toLowerCase().indexOf(term.toLowerCase()) > -1
            )
            .slice(0, 10)
      )
    );

  formatter = (x: { name: string }) => x.name;

  getData() {
    this.mangaService.getMangaList()
      .subscribe({
        next: (data) => {
          this.mangaList = data;
        },
        error: (error) => {
          console.error(error);
        },
      });
  }

  sortBy(sortType: string) {
    switch (sortType) {
      case 'New':
        this.mangaList = this.mangaList.sort(
          (a, b) =>
            new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime()
        );
        break;
      case 'Old':
        this.mangaList = this.mangaList.sort(
          (a, b) =>
            new Date(a.updatedAt).getTime() - new Date(b.updatedAt).getTime()
        );
        break;
      case 'LastUpdated':
        this.mangaList = this.mangaList
          .map((data) => {
            // data.filterDate = this.mapDate(data.lastUpDate);
            return { ...data, filterDate: this.mapDate(data.lastUpDate) };;
          })
          .sort((a, b) => b.filterDate!.getTime() - a.filterDate!.getTime());
        break;
      case 'startDated':
        this.mangaList = this.mangaList
          .map((data) => {
            // data.filterDate = this.mapDate(data.startDate);
            return { ...data, filterDate: this.mapDate(data.lastUpDate) };;
          })
          .sort((a, b) => a.filterDate!.getTime() - b.filterDate!.getTime());
        break;
      default:
        this.mangaList = this.mangaList.sort((a, b) => +a.no - +b.no);
        break;
    }
  }

  mapDate(date: string) {
    let filter = '';
    if (date.substring(0, 1) === '~') {
      filter = date.replace('~', '01/');
    } else {
      filter = date;
    }

    const [day, month, year] = filter.split('/').map(Number);
    return new Date(year, month - 1, day);
  }


}
